import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

    const defaultData = [
        { date: '', price: 0 },
        { date: '', price: 0 },
        { date: '', price: 0 },
        { date: '', price: 0 }
    ];

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
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={coinData ? coinData.priceHistory : defaultData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </div>
    );
}

export default M_fig;
