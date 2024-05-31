import test
import backtrader as bt
import json
import os
import importlib
import backtrader.feeds as btfeeds
from datetime import datetime
import matplotlib.pyplot as plt


with open('stategy.json', 'r') as file:
    params = json.load(file)
with open(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))),'config.json'), 'r') as file:
    config = json.load(file)
class CSVData(btfeeds.GenericCSVData):
    params = (
        ('fromdate', datetime(2020, 1, 1)),  # 데이터 시작 날짜
        ('todate', datetime(2022, 12, 31)),  # 데이터 종료 날짜
        ('nullvalue', 0.0),
        ('dtformat', ('%Y-%m-%d %H:%M:%S+00:00')),
        ('datetime', 0),
        # ('time', -1),  # 시간 컬럼 없음
        ('open', 1),
        ('high', 2),
        ('low', 3),
        ('close', 4),
        ('volume', 5),
        ('openinterest', -1)
    )

# def get_data_path():
#     return os.path.join(os.path.dirname(__file__), 'Data')

cerebro = bt.Cerebro()
# cerebro.addstrategy("test.{}".format(config['strategy']))
# strategy_class = config['strategy']

module = importlib.import_module('test')
strategy_class = getattr(module, config['strategy'])
cerebro.addstrategy(strategy_class)

path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data','BTC_1h_2020-01-01_2021-01-10.csv')
data = CSVData(dataname=path)
cerebro.adddata(data)


cerebro.broker.set_cash(config['cash'])


cerebro.run()


cerebro.plot(style='candlestick')