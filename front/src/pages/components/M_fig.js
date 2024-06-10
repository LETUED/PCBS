import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Chart from 'react-apexcharts';

function M_fig({ coinName }) {
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        if (coinName) {
            fetch(`http://127.0.0.1:5000/api/crypto/${coinName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setCoinData(data);
                })
                .catch(error => console.error('Error fetching coin data:', error));
        }
    }, [coinName]);

    const defaultData = {
        series: [
            {
                name: 'Candlestick',
                type: 'candlestick',
                data: []
            },
            {
                name: 'Line',
                type: 'line',
                data: []
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'candlestick'
            },
            title: {
                text: 'Candlestick with Line',
                align: 'left'
            },
            xaxis: {
                type: 'datetime',
                categories: []
            }
        }
    };

    const chartData = coinData ? {
        series: [
            {
                name: 'Candlestick',
                type: 'candlestick',
                data: coinData.priceHistory.map(item => ({
                    x: new Date(item.date),
                    y: [item.open, item.high, item.low, item.close]
                }))
            },
            {
                name: 'Line',
                type: 'line',
                data: coinData.priceHistory.map(item => ({
                    x: new Date(item.date),
                    y: item.price
                }))
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'candlestick'
            },
            title: {
                text: 'Candlestick with Line',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            }
        }
    } : defaultData;

    return (
        <div>
            <Box
                my={4}
                display="flex"
                flexDirection="column"
                gap={4}
                p={2}
                sx={{
                    border: '2px solid grey',
                    borderRadius: '10px'
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {coinName ? `${coinName} Price Chart` : 'Price Chart'}
                </Typography>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="candlestick"
                    height={350}
                />
            </Box>
        </div>
    );
}

export default M_fig;
