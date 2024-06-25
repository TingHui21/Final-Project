from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from databases import Database
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Text

DATABASE_URL = "sqlite:///./commerce.db"

database = Database(DATABASE_URL)
metadata = MetaData()

# Define the products table
products = Table(
    "products",
    metadata,
    Column("ProductID", String, primary_key=True),
    Column("ProductName", String),
    Column("ProductDescription", Text),
    Column("ProductPrice", String),
    Column("Stock", Integer),
    Column("imageURL", String)
)

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://54.254.12.127:3005","http://localhost:3000","http://localhost:3005"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/get_products/")
async def get_products():
    query = products.select()
    return await database.fetch_all(query)
