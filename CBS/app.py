from flask import Flask, jsonify
from flask_cors import CORS
from CBS.Trade.TopCoin import get_crypto_data
from CBS.Util.News import parse_news

app = Flask(__name__)
CORS(app)


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
        print("Fetched data from get_crypto_data:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500


@app.route('/api/backtest')
def backtest():
    try:
        data = backtest()
        print("Fetched data from get_crypto_data:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500

@app.route('/api/dryrun')
def dryrun():
    try:
        data = dryrun()
        print("Fetched data from get_crypto_data:", data)  # 데이터 확인용 출력
        return jsonify(data), 200
    except Exception as e:
        print("Error occurred:", e)  # 오류 메시지 출력
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
