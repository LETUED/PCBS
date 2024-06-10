from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from CBS.Trade.TopCoin import get_crypto_data, fetch_coin_data
from CBS.Util.News import parse_news
import time


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api/crypto')
def crypto():
    try:
        data = get_crypto_data()
        print("Fetched data from get_crypto_data:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500

@app.route('/api/news')
def news():
    try:
        data = parse_news()
        print("Fetched data from parse_news:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500

@app.route('/api/backtest')
def backtest():
    try:
        data = backtest()
        print("Fetched data from backtest:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500

@app.route('/api/dryrun')
def dryrun():
    try:
        data = dryrun()
        print("Fetched data from dryrun:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500

@app.route('/api/crypto/<coin_name>', methods=['GET'])
def crypto_data(coin_name):
    try:
        data = fetch_coin_data(f'{coin_name}/USDT')
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_log():
    for i in range(5):
        yield f"data: Step {i+1}: Calculation in progress...\n\n"
        time.sleep(1)
    yield "data: Calculation complete.\n\n"

@app.route('/api/process_data', methods=['POST'])
def process_data():
    data = request.json
    print("Data received:", data)
    # 여기에서 데이터를 처리합니다.
    return {"message": "Data processing started"}

@app.route('/api/logs', methods=['GET'])
def stream_logs():
    return Response(generate_log(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)
