import sys
import backtrader as bt
import json
import os
import importlib
import backtrader.feeds as btfeeds
from datetime import datetime

# 이 파일 위치 기준 절대경로 — app.py에서 import돼도, 직접 실행해도 동작
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)  # importlib.import_module('test') 용

with open(os.path.join(BASE_DIR, 'stategy.json'), 'r') as file:
    params = json.load(file)
with open(os.path.join(os.path.dirname(os.path.dirname(BASE_DIR)), 'config.json'), 'r') as file:
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


DATA_FILE = 'BTC_1h_2020-01-01_2021-01-10.csv'


def run_backtest(plot=False, plot_path=None):
    """백테스트 1회 실행 후 성과 dict 반환.

    plot=True면 캔들차트 창 표시, plot_path를 주면 차트를 파일로 저장.
    """
    cerebro = bt.Cerebro()

    module = importlib.import_module('test')
    strategy_class = getattr(module, config['strategy'])
    cerebro.addstrategy(strategy_class)

    path = os.path.join(os.path.dirname(BASE_DIR), 'Data', DATA_FILE)
    data = CSVData(dataname=path)
    cerebro.adddata(data)

    cerebro.broker.set_cash(config['cash'])
    cerebro.addanalyzer(bt.analyzers.TradeAnalyzer, _name='trades')

    start_value = cerebro.broker.getvalue()
    results = cerebro.run()
    end_value = cerebro.broker.getvalue()

    trades = results[0].analyzers.trades.get_analysis()
    total_trades = trades.get('total', {}).get('closed', 0)
    won = trades.get('won', {}).get('total', 0)
    lost = trades.get('lost', {}).get('total', 0)

    if plot or plot_path:
        figs = cerebro.plot(style='candlestick')
        if plot_path:
            figs[0][0].savefig(plot_path, dpi=100, bbox_inches='tight')

    return {
        'strategy': config['strategy'],
        'data_file': DATA_FILE,
        'start_value': start_value,
        'end_value': round(end_value, 2),
        'return_pct': round((end_value - start_value) / start_value * 100, 2),
        'total_trades': total_trades,
        'won': won,
        'lost': lost,
    }


if __name__ == "__main__":
    result = run_backtest(plot=True)
    print(result)
