import React, {useState} from 'react';
import {Container, Box, Typography, Stack, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import SelectOption from './Option/SelectOption';
import InputOption from './Option/InputOption';
import SliderOption from './Option/SliderOption';
import ToggleOption from './Option/ToggleOption';
import BackGround from './template/BackGround';
import {STRATEGY_ROUTE} from './routes';
import {saveConfigToLocalStorage, exportLocalStorageAsJson} from './utils';

const options = [
    {value: "option1", label: "옵션 1"},
    {value: "option2", label: "옵션 2"},
    {value: "option3", label: "옵션 3"}
];

function ConfigPage() {
    const title = "Config";
    const [config, setConfig] = useState({
        toggleOption: false,
        selectOption: options[0].value,
        inputOption: '',
        sliderOption: 30
    });

    const navigate = useNavigate();

    const handleToggleChange = (value) => {
        setConfig(prev => ({...prev, toggleOption: value}));
    };

    const handleSelectChange = (value) => {
        setConfig(prev => ({...prev, selectOption: value}));
    };

    const handleInputChange = (value) => {
        setConfig(prev => ({...prev, inputOption: value}));
    };

    const handleSliderChange = (value) => {
        setConfig(prev => ({...prev, sliderOption: value}));
    };

    const handleSaveConfig = () => {
        saveConfigToLocalStorage('config', config);
        navigate(STRATEGY_ROUTE);
    };
    const handleExportLocalStorage = () => {
        const allDataJson = exportLocalStorageAsJson();
        alert(allDataJson);
    };

    return (
        <BackGround title={title}>
            <Box sx={{mt: 4, width: '100%'}}>
                <Container maxWidth="sm" sx={{mt: 4}}>
                    <Typography variant="h5" sx={{mb: 2}}>
                        <h1>매개변수 설정</h1>
                    </Typography>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{border: '2px solid grey', borderRadius: '10px'}}
                    >
                        <Stack spacing={3} direction="column">
                            <ToggleOption
                                label="옵션 1 활성화"
                                value={config.toggleOption}
                                onChange={e => handleToggleChange(e.target.checked)}
                            />
                            <SelectOption
                                label="옵션 2 활성화"
                                options={options}
                                value={config.selectOption}
                                onChange={e => handleSelectChange(e.target.value)}
                            />
                            <InputOption
                                label="옵션 3 활성화"
                                value={config.inputOption}
                                onChange={e => handleInputChange(e.target.value)}
                            />
                            <SliderOption
                                label="옵션 4 활성화"
                                value={config.sliderOption}
                                onChange={handleSliderChange}
                            />
                        </Stack>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleSaveConfig} sx={{mt: 2}}>
                            Save Config
                        </Button>
                    </Stack>
                    <Button variant="contained" onClick={handleExportLocalStorage} sx={{mt: 2}}>
                        Export LocalStorage
                    </Button>
                </Container>
            </Box>
        </BackGround>
    );
}

export default ConfigPage;
