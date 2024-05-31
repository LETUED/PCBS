import requests
from bs4 import BeautifulSoup

API_URL = 'https://crypto-news-api.b4a.app/'
ROOT_TITLE = 'Welcome to nickglu86 Crypto News API'
ROOT_DESC = 'Here are the relative endpoints:'
API_CATEGORY = 'news/'
THE_BLOCK_CRYPTO = 'theblockcrypto'
THE_BLOCK_CRYPTO_DOMAIN = 'https://www.theblock.co'
YAHOO_FINANCE = 'yahoofinance'
YAHOO_FINANCE_DOMAIN = 'https://finance.yahoo.com/topic/crypto/'
COIN_TELEGRAPH = 'cointelegraph'
COIN_TELEGRAPH_DOMAIN = 'https://cointelegraph.com'
CRYPTOPOLITAN = 'cryptopolitan'
CRYPTOPOLITAN_DOMAIN = 'https://www.cryptopolitan.com/news/'

root = {
    "title": ROOT_TITLE,
    "apiUrl": API_URL,
    "desc": ROOT_DESC,
    "endpoints": {
        YAHOO_FINANCE: API_CATEGORY + YAHOO_FINANCE
    }
}

resources = [
    {
        "name": YAHOO_FINANCE,
        "url": YAHOO_FINANCE_DOMAIN,
        "selectors": {
            "item": '#Main li.js-stream-content',
            "title": lambda title: title.find('h3').text,
            "desc": lambda desc: desc.find('p').text,
            "url": lambda url: YAHOO_FINANCE_DOMAIN + url.find('a')['href'],
            "image": lambda image: image.find('img')['src'],
            "date": lambda date: "",
            "author": lambda author: ""
        }
    }
]

def fetch_news(resource):
    response = requests.get(resource["url"])
    soup = BeautifulSoup(response.content, 'html.parser')
    items = soup.select(resource["selectors"]["item"])
    news = []
    for item in items:
        news.append({
            "title": resource["selectors"]["title"](item),
            "desc": resource["selectors"]["desc"](item),
            "url": resource["selectors"]["url"](item),
            "image": resource["selectors"]["image"](item),
            "date": resource["selectors"]["date"](item),
            "author": resource["selectors"]["author"](item),
            "category": resource["selectors"].get("category", lambda x: "")(item)
        })
    return news

def parse_news():
    all_news = []
    for resource in resources:
        all_news.extend(fetch_news(resource))
    return all_news

