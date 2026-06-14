import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "../styles/MarketOverview.css";
import CountryDropdown from "../components/CountryDropdown";
import { countries, type CountryName } from "../constants/countries";

const API_BASE = "http://127.0.0.1:8000/api/market/all-market";

interface DataPoint {
  date: string;
  value: number;
}

interface CombinedMarketData {
  nifty: DataPoint[];
  usdinr: DataPoint[];
  gdp: DataPoint[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
  yLabel,
  valueFormatter,
}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-chart-tooltip">
        <div className="tooltip-title">
          Year: {new Date(label).getFullYear()}
        </div>
        <div className="tooltip-value" style={{ color: payload[0].fill }}>
          {yLabel}: {valueFormatter(payload[0].value)}
        </div>
      </div>
    );
  }
  return null;
};

function InteractiveBarChart({
  title,
  data,
  color,
  yLabel,
  valueFormatter,
}: {
  title: string;
  data: DataPoint[];
  color: string;
  yLabel: string;
  valueFormatter: (v: number) => string;
}) {
  if (!data || data.length === 0) {
    return (
      <div className="dashboard-fallback-text">
        No historical records available for {title}
      </div>
    );
  }

  const formatXAxis = (dateStr: string) => {
    return new Date(dateStr).getFullYear().toString();
  };

  return (
    <div className="chart-card">
      <h3 className="chart-title">{title}</h3>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f5f9"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tickFormatter={formatXAxis}
              tick={{ fontSize: 11, fill: "#64748b" }}
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
            />

            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={valueFormatter}
              tick={{ fontSize: 11, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              width={85}
            />

            <Tooltip
              content={
                <CustomTooltip
                  yLabel={yLabel}
                  valueFormatter={valueFormatter}
                />
              }
              cursor={{ fill: "#f1f5f9", opacity: 0.5 }}
            />

            <Bar
              dataKey="value"
              fill={color}
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function MarketOverview() {
  const [selectedCountry, setSelectedCountry] =
    useState<CountryName>("India");

  const [marketData, setMarketData] =
    useState<CombinedMarketData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const countryConfig = countries[selectedCountry];

    setLoading(true);
    setError(null);

    fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock_symbol: countryConfig.stock_symbol,
        currency_symbol: countryConfig.currency_symbol,
        gdp_world_bank: countryConfig.gdp_world_bank,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Server configuration tracking error: ${res.status}`
          );
        }
        return res.json();
      })
      .then((json) => {
        setMarketData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCountry]);

  if (loading) {
    return (
      <div className="dashboard-fallback-text">
        Compiling isolated data tables...
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-fallback-text error">
        Error: {error}
      </div>
    );
  }

  if (!marketData) {
    return (
      <div className="dashboard-fallback-text">
        No dashboard metrics generated.
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">
        Market Overview Dashboard
      </h2>

      <CountryDropdown
        selectedCountry={selectedCountry}
        onCountryChange={(country) =>
          setSelectedCountry(country as CountryName)
        }
      />

      <InteractiveBarChart
        title={`${selectedCountry} Stock Index`}
        data={marketData.nifty}
        color="#2563eb"
        yLabel="Points"
        valueFormatter={(v) =>
          v.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })
        }
      />

      <InteractiveBarChart
        title={`${selectedCountry} Currency`}
        data={marketData.usdinr}
        color="#ea580c"
        yLabel="Rate"
        valueFormatter={(v) => v.toFixed(2)}
      />

      <InteractiveBarChart
        title={`${selectedCountry} GDP (Billions USD)`}
        data={marketData.gdp.map((item) => ({
          ...item,
          value: item.value / 1e9,
        }))}
        color="#16a34a"
        yLabel="GDP"
        valueFormatter={(v) => `$${v.toFixed(1)}B`}
      />
    </div>
  );
}