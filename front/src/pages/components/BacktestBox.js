import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack, CircularProgress } from '@mui/material';

function BacktestBox() {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/backtest')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setResult(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Backtest Result
            </Typography>
            <Box
                my={4}
                display="flex"
                flexDirection="column"
                gap={1}
                p={2}
                sx={{
                    border: '2px solid grey',
                    borderRadius: '10px'
                }}
            >
                {error && <Typography color="error">백테스트 호출 실패: {error}</Typography>}
                {!result && !error && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <CircularProgress size={20} />
                        <Typography>백테스트 실행 중...</Typography>
                    </Stack>
                )}
                {result && (
                    <>
                        <Typography variant="body1">전략: {result.strategy} / 데이터: {result.data_file}</Typography>
                        <Typography variant="body1">시작 자본: {result.start_value.toLocaleString()} → 종료 자본: {result.end_value.toLocaleString()}</Typography>
                        <Typography variant="body1" sx={{ color: result.return_pct >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                            수익률: {result.return_pct}%
                        </Typography>
                        <Typography variant="body1">거래 {result.total_trades}회 (승 {result.won} / 패 {result.lost})</Typography>
                    </>
                )}
            </Box>
        </div>
    );
}

export default BacktestBox;
