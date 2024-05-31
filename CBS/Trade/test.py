import backtrader as bt
import json



with open('stategy.json', 'r') as file:
    params = json.load(file)

class MACDStrategy(bt.Strategy):
    """
    MACD 전략:
    - fastema: 단기 지수 이동 평균 기간 (최소 1-12일 사용)
    - slowema: 장기 지수 이동 평균 기간 (최소 1-26일 사용)
    - signal: 시그널 라인의 EMA 기간 (최소 1-9일 사용)
    """
    # params = (('fastema', 12), ('slowema', 26), ('signal', 9))

    def __init__(self):
        self.macd = bt.indicators.MACD(self.data.close,
                                       period_me1=params['MACDStrategy']['fastema'],
                                       period_me2=params['MACDStrategy']['slowema'],
                                       period_signal=params['MACDStrategy']['signal'])

    def next(self):
        if not self.position:
            if self.macd.macd > self.macd.signal:
                self.buy()
        else:
            if self.macd.macd < self.macd.signal:
                self.sell()
class RSIStrategy(bt.Strategy):
    """
    RSI 전략:
    - rsi_period: RSI 계산 기간 (최소 1-14일 사용)
    - rsi_upper: 과매수 상태를 나타내는 RSI 값 (일반적으로 70)
    - rsi_lower: 과매도 상태를 나타내는 RSI 값 (일반적으로 30)
    """
    # params = (('rsi_period', 14), ('rsi_upper', 70), ('rsi_lower', 30))

    def __init__(self):
        self.macd = bt.indicators.MACD(
            self.data.close,
            period_me1=params['MACDStrategy']['fastema'],
            period_me2=params['MACDStrategy']['slowema'],
            period_signal=params['MACDStrategy']['signal']
        )

    def next(self):
        if not self.position:
            if self.macd.macd > self.macd.signal:
                self.buy()
        else:
            if self.macd.macd < self.macd.signal:
                self.sell()
class BollingerStrategy(bt.Strategy):
    """
    볼린저 밴드 전략:
    - period: 볼린저 밴드 계산을 위한 기간 (최소 1일, 일반적으로 20일 사용)
    - devfactor: 밴드 너비를 결정하는 표준 편차 배수 (일반적으로 2.0)
    """
    # params = (('period', 20), ('devfactor', 2.0))

    def __init__(self):
        self.rsi = bt.indicators.RSI(
            self.data.close,
            period=params['RSIStrategy']['rsi_period']
        )

    def next(self):
        if not self.position:
            if self.rsi < params['RSIStrategy']['rsi_lower']:
                self.buy()
        else:
            if self.rsi > params['RSIStrategy']['rsi_upper']:
                self.sell()
class BreakoutStrategy(bt.Strategy):
    """
    돌파 전략:
    - lookback_period: 최고가와 최저가를 찾기 위한 기간 (최소 1일, 일반적으로 20일 사용)
    """
    # params = (('lookback_period', 20),)

    def __init__(self):
        self.high = bt.indicators.Highest(
            self.data.high,
            period=params['BreakoutStrategy']['lookback_period']
        )
        self.low = bt.indicators.Lowest(
            self.data.low,
            period=params['BreakoutStrategy']['lookback_period']
        )

    def next(self):
        if not self.position:
            if self.data.close > self.high:
                self.buy()
        else:
            if self.data.close < self.low:
                self.sell()
class VWAPStrategy(bt.Strategy):
    """
    VWAP 전략:
    이 전략에는 추가적인 매개변수가 없습니다. VWAP는 거래량 가중 평균 가격을 계산합니다.
    """
    def __init__(self):
        self.vwap = bt.indicators.VWAP(self.data)

    def next(self):
        if not self.position:
            if self.data.close < self.vwap:
                self.buy()
        else:
            if self.data.close > self.vwap:
                self.sell()