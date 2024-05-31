# [`CBS Project`](../../README.md) 

# 모듈/클래스 이름

## 개요

- **목적**: binance API Request를 위한 모듈 집합
- **기능**: 
  - Collector.py
    - fetch_data : binance API 요청후 DataFrame Return
    - generate_time_ranges : 시작 시간부터 종료 시간까지 delta 간격으로 시간 범위를 생성
    - parallel_fetch : 병렬로 데이터를 요청하여 모든 결과를 하나의 DataFrame으로 합침
  - ProcessData.py
    - load_config : config.json 파일을 읽어옴
    - fetch_data : Collector 클래스,CoinSelector 클래스,DataStorage 클래스를 이용하여 데이터저장
  - DataStorage.py
    - save_json : json 파일로 저장
    - generate_filename : 파일 이름 생성
  - SellectSimbol.py
    - load_symbols : 모든 코인의 심볼을 가져옴
    - load_config : config.json 파일을 읽어옴
    - apply_blacklist : 블랙리스트에 있는 코인을 제외
    - apply_whitelist : 화이트리스트에 있는 코인만 선택
    - get_symbols : 화이트 리스트와 블랙리스트 적용후 코인 심볼을 Return

- **추후 추가사항**
  - dryrun
    - Collector 부분에서 DryrunPage 기능 추가
  - DataStorage
    - 여러 포맷으로 데이터 저장 할수 있도록
  - SellectSimbol
    - 코인 심볼을 추가 삭제하는 기능 추가
  - limit
    - 요청 제한 짧은 기간요청이 limit에 걸리는 경우 대응