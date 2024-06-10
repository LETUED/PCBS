# /Users/jeondonghwan/PycharmProjects/CBS/CBS/Trade/TopCoin.py
import ccxt
import datetime

def get_crypto_data():
    exchange = ccxt.binance()
    symbols = ['BNB/USDT', 'BTC/USDT', 'ETH/USDT', 'DOGE/USDT', 'PEPE/USDT', 'SHIB/USDT', 'SOL/USDT', 'FLOKI/USDT', 'BONK/USDT', 'GLM/USDT']
    data = []

    for symbol in symbols:
        ticker = exchange.fetch_ticker(symbol)
        data.append({
            'name': symbol.split('/')[0],
            'price': f"${ticker['last']:.2f}",
            'change': f"{ticker['percentage']:.2f}%"
        })
    return data


def fetch_coin_data(coin_symbol, exchange_name='binance'):
    exchange = getattr(ccxt, exchange_name)()
    ohlcv = exchange.fetch_ohlcv(coin_symbol, timeframe='1d')

    data = {
        'priceHistory': []
    }

    for candle in ohlcv:
        data['priceHistory'].append({
            'date': datetime.datetime.utcfromtimestamp(candle[0] / 1000).strftime('%Y-%m-%d'),
            'open': candle[1],
            'high': candle[2],
            'low': candle[3],
            'close': candle[4],
            'price': candle[4]  # Closing price for line chart
        })

    return data