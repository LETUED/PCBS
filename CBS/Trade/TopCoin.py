# /Users/jeondonghwan/PycharmProjects/CBS/CBS/Trade/TopCoin.py
import ccxt

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
print(get_crypto_data())