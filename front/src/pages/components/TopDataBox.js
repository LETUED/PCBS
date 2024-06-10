import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack } from '@mui/material';

function TopDataBox({ onSelectCoin }) {
    const [cryptoData, setCryptoData] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/crypto')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                if (Array.isArray(data)) {
                    setCryptoData(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCoinClick = (coin) => {
        setSelectedCoin(coin.name);
        onSelectCoin(coin.name);
    };

    return (
        <div className="MainPage">
            <Typography variant="h5" gutterBottom>
                Top Data
            </Typography>
            <Box
                my={4}
                display="flex"
                flexDirection="column"
                gap={4}
                p={2}
                sx={{
                    border: '2px solid grey',
                    borderRadius: '10px',
                    maxHeight: '350px',
                    minHeight: '350px',
                    overflowY: 'auto'
                }}
            >
                {cryptoData.map((data, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        onClick={() => handleCoinClick(data)}
                        sx={{
                            cursor: 'pointer',
                            border: selectedCoin === data.name ? '2px solid blue' : 'none',
                            borderRadius: '5px',
                            padding: '5px'
                        }}
                    >
                        <Typography variant="body1" sx={{ width: '25%', fontWeight: 'bold' }}>
                            {data.name}
                        </Typography>
                        <Typography variant="body1" sx={{ width: '55%' }}>
                            {data.price}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                width: '20%',
                                color: data.change.startsWith('-') ? 'red' : 'green'
                            }}
                        >
                            {data.change}
                        </Typography>
                    </Stack>
                ))}
            </Box>
        </div>
    );
}

export default TopDataBox;
