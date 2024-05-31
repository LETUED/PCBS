"""
:path CBS/Request/ProcessData.py
목표:수집한 데이터를 저장,로드,삭제,업데이트 하는 클래스
    Data는 "CBS/CBS/Data"에 Json형태로 저장.
    데이터명은 코인명_시간간격(interval)_시작시간_종료시간 으로 저장
    추후 data를 json말고 다른 DB로 사용할수 있게 모듈화를 사켜야함
"""
import json
import os
import time
from SellectSimbol import CoinSelector
from Collecter import Collector

class DataProcess:
    def __init__(self):
        """
        cd
        초기 설정을 로드하고 필요한 모듈을 초기화합니다.
        """
        self.config_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'config.json')
        self.data_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data')
        self.load_config()
        self.DataStorage = DataStorage()

    def load_config(self):
        """
        config.json 파일에서 설정을 로드.
        """
        with open(self.config_path, 'r') as file:
            config = json.load(file)
        self.interval = config['request']['interval']

        self.s = config['request']['start']
        self.e = config['request']['end']

        self.start_time = int(time.mktime(time.strptime(self.s, "%Y-%m-%d")) * 1000)
        self.end_time = int(time.mktime(time.strptime(self.e, "%Y-%m-%d")) * 1000)
        self.coin_selector = CoinSelector()
        self.symbols = self.coin_selector.get_symbols()


    def fetch_data(self):
        """
        각 코인 심볼에 대해 데이터를 수집.
        """
        for symbol in self.symbols:
            collector = Collector(symbol, self.interval, self.start_time, self.end_time)
            data = collector.parallel_fetch()
            filename = self.DataStorage.generate_filename(symbol, self.interval, self.s, self.e)

            self.DataStorage.save_csv(data, filename)


class DataStorage:
    def __init__(self):
        """
        파일 저장을 위한 기본 경로를 설정.
        """
        self.base_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data')


    def save_json(self, data, filename):
        filepath = os.path.join(self.base_path, f"{filename}.json")
        data.to_json(filepath, orient='records')

    def save_csv(self, data, filename):
        filepath = os.path.join(self.base_path, f"{filename}.csv")
        data.to_csv(filepath, index=False)

    def generate_filename(self, symbol, interval, start_time, end_time):
        S_symbol = symbol.replace('/USDT', '')
        return f"{S_symbol}_{interval}_{start_time}-{end_time}"