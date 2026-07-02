# PCBS

코인 백테스트·드라이런 시스템. Python 백엔드(`CBS/`)와 React 대시보드(`front/`)로 구성된 졸업작품 프로젝트다. 2024-05~06 작업, 메인 페이지까지 만들고 중단.

## 구성

**백엔드 — `CBS/`**
- `Request/Collecter.py` — Binance에서 캔들 수집 (ccxt, ThreadPoolExecutor 병렬)
- `Request/ProcessData.py`, `SellectSimbol.py` — 데이터 정제·심볼 선별
- `Trade/main.py` — backtrader 백테스트 러너. 전략 파라미터는 `stategy.json`으로 주입
- `Util/News.py` — 뉴스 크롤러
- `Data/` — BTC/ETH 캔들 CSV 샘플

**프론트 — `front/`** (React + MUI + ApexCharts)
- `MainPage` / `IntroPage` — 진입 화면
- `BacktestPage` / `DryrunPage` / `ResultPage` — 백테스트 설정·실행·결과 차트
- `ConfigPage`, `Option/` — 기간·심볼·전략 파라미터 입력 컴포넌트
- `MainNewsPage`, `Action/NewsCollecter` — 뉴스 수집 뷰

## 실행

```bash
# 백엔드 (백테스트에 필요한 최소 의존성)
pip install backtrader pandas matplotlib
cd CBS/Trade
python main.py                  # 포함된 CSV 데이터로 백테스트 (전략·시드는 루트 config.json)

# 프론트
cd front
npm install
npm start
```

## 상태

프론트 메인 페이지 단계에서 중단했다. 이후 코인 트레이딩 작업은 웹 UI 대신 CLI·텔레그램 인터페이스 방향으로 전환.
백테스트 경로는 동작 확인됨 (RSIStrategy, 포함된 BTC 1h CSV 기준).
