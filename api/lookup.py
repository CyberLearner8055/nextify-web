from fastapi import FastAPI
import requests

app = FastAPI()

API_URL = "https://www.zephrexdigital.site/api?key=ZEPH-IM45D&type=PHONE&term="

@app.get("/lookup/{num}")
def lookup(num: str):
    try:
        return requests.get(API_URL + num, timeout=10).json()
    except Exception as e:
        return {"status": "ERROR", "msg": str(e)}