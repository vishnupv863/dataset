export const countries = {
  "India": {
    stock_symbol: "^NSEI",
    currency_symbol: "USDINR=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/IN/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/IN/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "United States": {
    stock_symbol: "^GSPC",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/US/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "China": {
    stock_symbol: "000001.SS",
    currency_symbol: "USDCNY=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/CN/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/CN/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Japan": {
    stock_symbol: "^N225",
    currency_symbol: "USDJPY=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/JP/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/JP/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Germany": {
    stock_symbol: "^GDAXI",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/DE/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/DE/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "United Kingdom": {
    stock_symbol: "^FTSE",
    currency_symbol: "GBPUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/GB/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/GB/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "France": {
    stock_symbol: "^FCHI",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/FR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/FR/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Canada": {
    stock_symbol: "^GSPTSE",
    currency_symbol: "USDCAD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/CA/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/CA/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Australia": {
    stock_symbol: "^AXJO",
    currency_symbol: "AUDUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/AU/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/AU/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "South Korea": {
    stock_symbol: "^KS11",
    currency_symbol: "USDKRW=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/KR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/KR/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Brazil": {
    stock_symbol: "^BVSP",
    currency_symbol: "USDBRL=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/BR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/BR/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Russia": {
    stock_symbol: "IMOEX.ME",
    currency_symbol: "USDRUB=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/RU/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/RU/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Singapore": {
    stock_symbol: "^STI",
    currency_symbol: "USDSGD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/SG/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/SG/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Switzerland": {
    stock_symbol: "^SSMI",
    currency_symbol: "USDCHF=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/CH/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/CH/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Italy": {
    stock_symbol: "FTSEMIB.MI",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/IT/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/IT/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Spain": {
    stock_symbol: "^IBEX",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/ES/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/ES/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Netherlands": {
    stock_symbol: "^AEX",
    currency_symbol: "EURUSD=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/NL/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/NL/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Saudi Arabia": {
    stock_symbol: "^TASI",
    currency_symbol: "USDSAR=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/SA/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/SA/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "United Arab Emirates": {
    stock_symbol: "^DFMGI",
    currency_symbol: "USDAED=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/AE/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/AE/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "South Africa": {
    stock_symbol: "J203.JO",
    currency_symbol: "USDZAR=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/ZA/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/ZA/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Mexico": {
    stock_symbol: "^MXX",
    currency_symbol: "USDMXN=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/MX/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/MX/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Indonesia": {
    stock_symbol: "^JKSE",
    currency_symbol: "USDIDR=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/ID/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/ID/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },

  "Turkey": {
    stock_symbol: "XU100.IS",
    currency_symbol: "USDTRY=X",
    gdp_world_bank:
      "https://api.worldbank.org/v2/country/TR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100",
    inflation_world_bank:
      "https://api.worldbank.org/v2/country/TR/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100",
  },
} as const;

export type CountryName = keyof typeof countries;