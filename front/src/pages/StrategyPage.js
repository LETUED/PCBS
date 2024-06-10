import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BACKTEST_ROUTE, DRYRUN_ROUTE } from "./routes";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import DropDownOption from "./Option/DropdownOption";
import BackGround from "./template/BackGround";
import {
    saveToLocalStorage,
    exportLocalStorageAsJson,
    loadFromLocalStorage,
    saveStrategyToLocalStorage,
    saveConfigToLocalStorage
} from './utils';
import Strategy1Component from './Strategy/Testst1';
import Strategy2Component from './Strategy/Testst2';
import Strategy3Component from './Strategy/Testst3';
import Strategy4Component from './Strategy/Testst4';

const strategyOptions = [
    { value: 'MACDStrategy', label: 'MACDStrategy' },
    { value: 'RSIStrategy', label: 'RSIStrategy' },
    { value: 'BollingerStrategy', label: 'BollingerStrategy' },
    { value: 'BreakoutStrategy', label: 'BreakoutStrategy' }
];

function StrategyPage() {
    const navigate = useNavigate();
    const [strategy, setStrategy] = useState('');
    const [strategyParams, setStrategyParams] = useState({});
    const fileInputRef = useRef(null);

    const handleStrategyChange = (event) => {
        setStrategy(event.target.value);
        const params = loadFromLocalStorage(event.target.value) || {};
        setStrategyParams(params);
    };

    const handleParamChange = (key, value) => {
        setStrategyParams(prev => ({ ...prev, [key]: value }));
    };

    const handleSaveStrategy = () => {
        const strategyData = {
            name: strategy,
            ...strategyParams
        };
        saveStrategyToLocalStorage('strategy', strategyData);
        alert('Strategy parameters saved');
    };

    const handleExportLocalStorage = () => {
        const allDataJson = exportLocalStorageAsJson();
        alert(allDataJson);
    };

    const handleFileUploadTrigger = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("파일 업로드 됨:", file.name);
    };

    const renderOptions = () => {
        switch (strategy) {
            case 'MACDStrategy':
                return (
                    <Strategy1Component strategyParams={strategyParams} handleParamChange={handleParamChange} />
                );
            case 'RSIStrategy':
                return (
                    <Strategy2Component strategyParams={strategyParams} handleParamChange={handleParamChange} />
                );
            case 'BollingerStrategy':
                return (
                    <Strategy3Component strategyParams={strategyParams} handleParamChange={handleParamChange} />
                );
            case 'BreakoutStrategy':
                return (
                    <Strategy4Component strategyParams={strategyParams} handleParamChange={handleParamChange} />
                );
            default:
                return <Typography>Select a strategy</Typography>;
        }
    };

    return (
        <BackGround title="Strategy">
            <Box sx={{ mt: 4, width: '100%' }}>
                <Container maxWidth="sm" sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        <h1>전략 선택</h1>
                    </Typography>
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
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
                            <Grid item xs={8}>
                                <DropDownOption
                                    label="Strategy"
                                    value={strategy}
                                    onChange={handleStrategyChange}
                                    options={strategyOptions}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" onClick={() => {
                                    setStrategy('');
                                    setStrategyParams({});
                                }}>
                                    Clear
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" onClick={handleFileUploadTrigger}>
                                    전략+
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Grid>
                        </Grid>
                        <Box
                            my={4}
                            display="flex"
                            flexDirection="column"
                            gap={4}
                            p={2}
                            sx={{ border: '2px solid grey', borderRadius: '10px' }}
                        >
                            {renderOptions()}
                        </Box>
                    </Box>
                    <Box pb={5}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={() => navigate(BACKTEST_ROUTE)}>Backtest</Button>
                            {/*<Button variant="contained" onClick={() => navigate(DRYRUN_ROUTE)}>Dryrun</Button>*/}
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={handleSaveStrategy}>Save Strategy</Button>
                            {/*<Button variant="contained" onClick={handleExportLocalStorage}>Export LocalStorage</Button>*/}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </BackGround>
    );
}

export default StrategyPage;