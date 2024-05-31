import requests
import json


url = 'https://api.binance.com/api/v3/exchangeInfo'


response = requests.get(url)
data = json.loads(response.text)


symbols = data['symbols']


spot = [symbol['symbol'] for symbol in symbols if symbol['quoteAsset'] == 'USDT']


with open('../Request/all_coin_list.json', 'w') as file:
    json.dump(spot, file)

print("Symbols saved to all_coin_list.json")
