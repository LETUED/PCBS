import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { loadFromLocalStorage } from '../utils';

function SendDataForm() {
    const [storedStrategy, setStoredStrategy] = useState(null);
    const [storedConfig, setStoredConfig] = useState(null);
    const [storedCoin, setStoredCoin] = useState(null);

    // 로컬 스토리지에서 데이터를 가져오는 함수
    const loadLocalStorageData = () => {
        const strategyData = loadFromLocalStorage('strategy');
        const configData = loadFromLocalStorage('config');
        const coinData = loadFromLocalStorage('coin');

        if (strategyData) {
            console.log('Loaded strategy data from localStorage:', strategyData);
            setStoredStrategy(strategyData);
        } else {
            console.error('No strategy data found in local storage');
        }

        if (configData) {
            console.log('Loaded config data from localStorage:', configData);
            setStoredConfig(configData);
        } else {
            console.error('No config data found in local storage');
        }

        if (coinData) {
            console.log('Loaded coin data from localStorage:', coinData);
            setStoredCoin(coinData);
        } else {
            console.error('No coin data found in local storage');
        }
    };

    useEffect(() => {
        loadLocalStorageData();  // 컴포넌트 마운트 시 로컬 스토리지 데이터 로드
    }, []);

    return (
        <div>
            <Typography variant="h5" sx={{ mb: 2 }}>
                <h1>Stats</h1>
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
                {storedCoin ? (
                    <Box mt={0}>
                        <Typography variant="h7">
                            <strong>Coin</strong>
                        </Typography>
                        <Box component="ul">
                            <li>{storedCoin}</li>
                        </Box>
                    </Box>
                ) : (
                    <Typography>No coin data found</Typography>
                )}
                {storedStrategy ? (
                    <Box mt={0}>
                        <Typography variant="h7">
                            <strong>Strategy: {storedStrategy.name}</strong>
                        </Typography>
                        <Box component="ul">
                            {Object.entries(storedStrategy).map(([key, value]) => (
                                key !== "name" && <li key={key}>{key}: {value}</li>
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <Typography>No strategies found</Typography>
                )}
                {storedConfig ? (
                    <Box mt={0}>
                        <Typography variant="h7">
                            <strong>Config</strong>
                        </Typography>
                        <Box component="ul">
                            {Object.entries(storedConfig).map(([key, value]) => (
                                <li key={key}>{key}: {value}</li>
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <Typography>No config found</Typography>
                )}

            </Box>
        </div>
    );
}

export default SendDataForm;
