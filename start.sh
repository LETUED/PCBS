#!/bin/sh
# 백엔드(Flask)와 프론트(React dev server)를 함께 실행
cd "$(dirname "$0")"
python -m CBS.app &
cd front
npm start