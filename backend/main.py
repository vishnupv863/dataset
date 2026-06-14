from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import home
from dotenv import load_dotenv
import os
from routers import market_overview

load_dotenv()

app = FastAPI()

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

# Allow your Vite frontend to talk directly to your backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specific URL like "http://localhost:5173"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(home.router)
app.include_router(market_overview.router)
