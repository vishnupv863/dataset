from fastapi import APIRouter, HTTPException
import yfinance as yf
import requests
import pandas as pd
import asyncio
from concurrent.futures import ThreadPoolExecutor

router = APIRouter(prefix="/api/market", tags=["market-overview"])
executor = ThreadPoolExecutor(max_workers=3)


def fetch_nifty_isolated():
    """Downloads Nifty 50 independently to keep its data isolated."""
    ticker = yf.Ticker("^NSEI")
    # Using historical data downsampling natively
    df = ticker.history(period="max", interval="1mo")
    if df.empty:
        return []

    df = df.reset_index()
    # Pull out only the rows from December to simulate clean yearly checkpoints
    df["Year"] = pd.to_datetime(df["Date"]).dt.year
    df["Month"] = pd.to_datetime(df["Date"]).dt.month
    yearly_df = df[df["Month"] == 12].drop_duplicates(subset=["Year"], keep="last")

    # If historical data is short or doesn't have Dec, fall back to last record of the year
    if yearly_df.empty:
        yearly_df = df.groupby(df["Date"].dt.year).last()

    return [
        {"date": f"{int(row['Year'])}-12-31", "value": float(row["Close"])}
        for _, row in yearly_df.iterrows()
    ]


def fetch_usdinr_isolated():
    """Downloads USDINR independently to keep its data isolated."""
    ticker = yf.Ticker("USDINR=X")
    df = ticker.history(period="max", interval="1mo")
    if df.empty:
        return []

    df = df.reset_index()
    df["Year"] = pd.to_datetime(df["Date"]).dt.year
    df["Month"] = pd.to_datetime(df["Date"]).dt.month
    yearly_df = df[df["Month"] == 12].drop_duplicates(subset=["Year"], keep="last")

    if yearly_df.empty:
        yearly_df = df.groupby(df["Date"].dt.year).last()

    return [
        {"date": f"{int(row['Year'])}-12-31", "value": float(row["Close"])}
        for _, row in yearly_df.iterrows()
    ]


def fetch_gdp():
    url = "https://api.worldbank.org/v2/country/IN/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    payload = resp.json()
    if not isinstance(payload, list) or len(payload) < 2:
        return []
    records = [
        {"date": f"{item['date']}-12-31", "value": float(item["value"])}
        for item in payload[1]
        if item.get("value") is not None
    ]
    records.sort(key=lambda r: r["date"])
    return records


@router.get("/all-market")
async def get_all_market_data():
    loop = asyncio.get_event_loop()
    try:
        # Running separate isolated functions to eliminate any data cross-contamination
        nifty_task = loop.run_in_executor(executor, fetch_nifty_isolated)
        usdinr_task = loop.run_in_executor(executor, fetch_usdinr_isolated)
        gdp_task = loop.run_in_executor(executor, fetch_gdp)

        nifty_data, usdinr_data, gdp_data = await asyncio.gather(
            nifty_task, usdinr_task, gdp_task
        )

        return {"nifty": nifty_data, "usdinr": usdinr_data, "gdp": gdp_data}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to gather isolated market metrics: {str(e)}",
        )
