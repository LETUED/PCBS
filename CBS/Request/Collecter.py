"""
:path CBS/Request/Collecter.py
목표 : Binance API로부터 데이터를 수집하는 Collecter 클래스
      Dryrun때 실시간으로 테스트 할때에 수집 -> 저장이 아니라
      수집 -> 분석 -> 평가 식으로 할것임
      그래서 데이터를 수집하는 Collecter 클래스를 만들어서 사용할것임
"""

import requests
import pandas as pd
import ccxt
from concurrent.futures import ThreadPoolExecutor

class Collector:
    def __init__(self, symbol, interval, start_time, end_time):
        """
        Collecter 클래스의 생성자입니다.
        :param symbol 요청할 코인의 심볼.
        :param interval 데이터를 요청할 시간 간격.
        :param start_time 요청할 시작 시간.
        :param end_time 요청할 종료 시간.
        :return
        """
        self.symbol = symbol
        self.interval = interval
        self.start_time = start_time
        self.end_time = end_time
        self.delta = 60000

        self.exchange = ccxt.binance()

    # def fetch_data(self, start, end):
    #     """
    #     API로부터 데이터를 요청하고 DataFrame으로 변환.
    #     :param start 분할된 시작 시간.
    #     :param end 분할된 종료 시간.
    #     :return 요청된 데이터의 DataFrame.
    #     """
    #     url = "https://api.binance.com/api/v3/klines"
    #     params = {
    #         "symbol": self.symbol,
    #         "interval": self.interval,
    #         "startTime": start,
    #         "endTime": end,
    #         "limit": 1000
    #     }
    #     response = requests.get(url, params=params)
    #     data = response.json()
    #     return pd.DataFrame(data)

    def set_delta(self, delta,interval):
        if interval == '1m':
            self.delta = delta
        elif interval == '1h':
            self.delta = delta * 60
        elif interval == '1d':
            self.delta = delta * 360
        else:
            self.delta = delta * 60
        return self.delta

    def fetch_data(self, start,end):
        ohlcv = self.exchange.fetch_ohlcv(self.symbol, timeframe=self.interval, since=start, limit=1)
        df = pd.DataFrame(ohlcv, columns=['datetime', 'open', 'high', 'low', 'close', 'volume'])
        df['datetime'] = pd.to_datetime(df['datetime'], unit='ms')
        return df
    def generate_time_ranges(self):
        """
        시작 시간부터 종료 시간까지 delta 간격으로 시간 범위를 생성.
        :return 시작 시간과 종료 시간 쌍의 생성자.
        """
        current = self.start_time
        while current < self.end_time:
            yield current, min(current + self.delta, self.end_time)
            current += self.delta + 1

    def parallel_fetch(self):
        """
        병렬로 데이터를 요청하여 모든 결과를 하나의 DataFrame으로 합침.
        :return 모든 요청 결과가 합쳐진 DataFrame.
        """
        time_ranges = list(self.generate_time_ranges())
        with ThreadPoolExecutor(max_workers=5) as executor:
            futures = [executor.submit(self.fetch_data, start, end) for start, end in time_ranges]
            data = pd.concat([future.result() for future in futures], ignore_index=True)
        return data

    # def dryrun_request(self):
    #     """
    #     dryrun을 위한 데이터 요청 함수
    #     """
    #     return self.parallel_fetch()