from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import yfinance as yf
import requests
import pandas as pd
import asyncio
from concurrent.futures import ThreadPoolExecutor

router = APIRouter(prefix="/api/market", tags=["market-overview"])
executor = ThreadPoolExecutor(max_workers=3)


class MarketRequest(BaseModel):
    stock_symbol: str
    currency_symbol: str
    gdp_world_bank: str


def fetch_market_symbol(symbol: str):
    ticker = yf.Ticker(symbol)

    df = ticker.history(period="max", interval="1mo")

    if df.empty:
        return []

    df = df.reset_index()

    df["Year"] = pd.to_datetime(df["Date"]).dt.year
    df["Month"] = pd.to_datetime(df["Date"]).dt.month

    yearly_df = df[df["Month"] == 12].drop_duplicates(subset=["Year"], keep="last")

    if yearly_df.empty:
        yearly_df = df.groupby(df["Date"].dt.year).last().reset_index()

    return [
        {
            "date": f"{int(row['Year'])}-12-31",
            "value": float(row["Close"]),
        }
        for _, row in yearly_df.iterrows()
    ]


def fetch_gdp(url: str):
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()

    payload = resp.json()

    if not isinstance(payload, list) or len(payload) < 2:
        return []

    records = [
        {
            "date": f"{item['date']}-12-31",
            "value": float(item["value"]),
        }
        for item in payload[1]
        if item.get("value") is not None
    ]

    records.sort(key=lambda r: r["date"])

    return records


@router.post("/all-market")
async def get_all_market_data(request: MarketRequest):
    loop = asyncio.get_event_loop()

    try:
        stock_task = loop.run_in_executor(
            executor,
            fetch_market_symbol,
            request.stock_symbol,
        )

        currency_task = loop.run_in_executor(
            executor,
            fetch_market_symbol,
            request.currency_symbol,
        )

        gdp_task = loop.run_in_executor(
            executor,
            fetch_gdp,
            request.gdp_world_bank,
        )

        stock_data, currency_data, gdp_data = await asyncio.gather(
            stock_task,
            currency_task,
            gdp_task,
        )

        return {
            "nifty": stock_data,
            "usdinr": currency_data,
            "gdp": gdp_data,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to gather market metrics: {str(e)}",
        )
