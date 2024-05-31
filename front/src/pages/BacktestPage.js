import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {RESULT_ROUTE} from "./routes";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import BackGround from "./template/BackGround";
import ToggleOption from "./Option/ToggleOption";

function BacktestPage() {
    const navigate = useNavigate();
    const [isResultEnabled, setIsResultEnabled] = useState(false);
    const handleResult = () => {
        if (isResultEnabled) {
            navigate(RESULT_ROUTE);
        }
    };

    const title = "Backtest";

    return (
        <BackGround title={title}>
            <Container maxWidth={false} sx={{mt: 4}}>
                <Grid container spacing={2} sx={{display: 'flex', alignItems: 'stretch'}}>
                    <Grid item xs={8}>
                        <Log/>
                    </Grid>
                    <Grid item xs={4}>
                        <Stats/>
                    </Grid>
                </Grid>
                <Fig/>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        onClick={handleResult}
                        disabled={!isResultEnabled}
                    >
                        Result
                    </Button>
                    <ToggleOption label="test" onChange={(e) => setIsResultEnabled(e.target.checked)}/>
                </Stack>
            </Container>
        </BackGround>
    );
}

function Log() {
    return (
        <div>
            <Typography variant="h5" sx={{mb: 2}}>
                <h1>Log</h1>
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
                    overflowY: 'auto'
                }}
            >
                {longText}
            </Box>
        </div>
    );
}

function Stats() {
    return (
        <div>
            <Typography variant="h5" sx={{mb: 2}}>
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
                    overflowY: 'auto'
                }}
            >
                {longText}
            </Box>
        </div>
    );
}

function Fig() {
    return (
        <div>
            <Typography variant="h5" sx={{mb: 2}}>
                <h1>Fig</h1>
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
                    overflowY: 'auto'
                }}
            >
                {longText}
            </Box>
        </div>
    );
}

const text = "동해물과 백두산이 마르고 닳도록 하느님이 보우하사";
const longText = Array(50).fill(text).join('');  // 텍스트를 반복하여 길게 만듭니다.
export default BacktestPage;