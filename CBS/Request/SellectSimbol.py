"""
:path CBS/Request/SellectSimbol.py
목표 : 코인 종목 blacklist, whitelist를 설정하고, 해당 종목을 선택하는 함수를 만든다.
      all_coin_list.json 파일을 읽어서 process_data.py에서 사용할 수 있게 한다.
      왜냐하면 나중에 코인 자원 관리할때에 필요하기 때문이다.
"""

import json
import os

class CoinSelector:
    def __init__(self):
        """
        CoinSelector 클래스 초기화
        """
        self.list_path = os.path.join(os.path.dirname(__file__),'all_coin_list.json')
        self.config_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))),'config.json')
        self.load_symbols()
        self.load_config()
        self.apply_blacklist()
        self.apply_whitelist()

    def load_symbols(self):
        """
        all_coin_list.json에서 코인 리스트를 로드
        """
        with open(self.list_path, 'r') as file:
            self.symbols = json.load(file)

    def load_config(self):
        """
        config.json에서 블랙,화이트 리스트를 로드
        """
        with open(self.config_path, 'r') as file:
            config = json.load(file)
            self.blacklist = config['coin']['blacklist']
            self.whitelist = config['coin']['whitelist']

    def apply_blacklist(self):
        """
        블랙리스트에 있는 코인을 제거
        :param blacklist: 제거할 코인의 리스트
        """
        self.symbols = [symbol for symbol in self.symbols if symbol not in self.blacklist]

    def apply_whitelist(self):
        self.symbols = [symbol for symbol in self.symbols if symbol in self.whitelist]
    def get_symbols(self):

        self.apply_blacklist()
        self.apply_whitelist()
        return self.symbols

    # def symbol_add
