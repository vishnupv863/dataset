export const countries = {
    "India": {
        "stock_symbol": "^NSEI",        
        "currency_symbol": "USDINR=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/IN/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "United States": {
        "stock_symbol": "^GSPC",        
        "currency_symbol": "EURUSD=X", 
        "gdp_world_bank": "https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "China": {
        "stock_symbol": "000001.SS",   
        "currency_symbol": "USDCNY=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/CN/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Japan": {
        "stock_symbol": "^N225",       
        "currency_symbol": "USDJPY=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/JP/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Germany": {
        "stock_symbol": "^GDAXI",      
        "currency_symbol": "EURUSD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/DE/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "United Kingdom": {
        "stock_symbol": "^FTSE",       
        "currency_symbol": "GBPUSD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/GB/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "France": {
        "stock_symbol": "^FCHI",       
        "currency_symbol": "EURUSD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/FR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Canada": {
        "stock_symbol": "^GSPTSE",    
        "currency_symbol": "USDCAD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/CA/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Australia": {
        "stock_symbol": "^AXJO",      
        "currency_symbol": "AUDUSD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/AU/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "South Korea": {
        "stock_symbol": "^KS11",       
        "currency_symbol": "USDKRW=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/KR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Brazil": {
        "stock_symbol": "^BVSP",       
        "currency_symbol": "USDBRL=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/BR/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Russia": {
        "stock_symbol": "IMOEX.ME",    
        "currency_symbol": "USDRUB=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/RU/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Singapore": {
        "stock_symbol": "^STI",        
        "currency_symbol": "USDSGD=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/SG/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    },

    "Switzerland": {
        "stock_symbol": "^SSMI",       
        "currency_symbol": "USDCHF=X",
        "gdp_world_bank": "https://api.worldbank.org/v2/country/CH/indicator/NY.GDP.MKTP.CD?format=json&per_page=100"
    }
} as const

export type CountryName = keyof typeof countries;