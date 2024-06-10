import React, { useState } from 'react';
import { Container, Box, Typography, Stack, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SelectOption from './Option/SelectOption';
import DateSelector from './Option/DateRangePicker';
import InputOption from './Option/InputOption';
import BackGround from './template/BackGround';
import { STRATEGY_ROUTE } from './routes';
import { saveConfigToLocalStorage, exportLocalStorageAsJson } from './utils';

const options = [
    { value: "1m", label: "1m" },
    { value: "1h", label: "1h" },
    { value: "1d", label: "1d" }
];

function ConfigPage() {
    const title = "Config";
    const [config, setConfig] = useState({
        start: "",
        end: "",
        interval: options[0].value,
        cash: ''
    });
    const [showAlert, setShowAlert] = useState({ show: false, message: '' });

    const navigate = useNavigate();

    const handleSelectChange = (value) => {
        setConfig(prev => ({ ...prev, interval: value }));
    };

    const handleInputChange = (value) => {
        setConfig(prev => ({ ...prev, cash: value }));
    };

    const handleDatePick = ({ startDate, endDate }) => {
        setConfig(prev => ({ ...prev, start: startDate, end: endDate }));
    };

    const handleSaveConfig = () => {
        if (!config.start || !config.end || !config.interval || !config.cash) {
            setShowAlert({ show: true, message: '모든 옵션을 선택해주세요!' });
            return;
        }
        setShowAlert({ show: false, message: '' });
        saveConfigToLocalStorage('config', config);
        navigate(STRATEGY_ROUTE);
    };

    const handleExportLocalStorage = () => {
        const allDataJson = exportLocalStorageAsJson();
        alert(allDataJson);
    };

    return (
        <BackGround title={title}>
            <Box sx={{ mt: 4, width: '100%' }}>
                <Container maxWidth="sm" sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        <h1>매개변수 설정</h1>
                    </Typography>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid grey', borderRadius: '10px' }}
                    >
                        <Stack spacing={3} direction="column">
                            <SelectOption
                                label="Interval"
                                options={options}
                                value={config.interval}
                                onChange={e => handleSelectChange(e.target.value)}
                            />
                            <InputOption
                                label="Set Cash"
                                value={config.cash}
                                onChange={e => handleInputChange(e.target.value)}
                            />
                            <DateSelector label="Select Date Range" onChange={handleDatePick} />
                        </Stack>
                        {showAlert.show && (
                            <Alert severity="warning">{showAlert.message}</Alert>
                        )}
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleSaveConfig} sx={{ mt: 2 }}>
                            Save Config
                        </Button>
                    </Stack>
                    <Button variant="contained" onClick={handleExportLocalStorage} sx={{ mt: 2 }}>
                        Export LocalStorage
                    </Button>
                </Container>
            </Box>
        </BackGround>
    );
}

export default ConfigPage;
