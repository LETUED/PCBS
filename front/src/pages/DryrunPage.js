import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {RESULT_ROUTE} from "./routes";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import BackGround from "./template/BackGround";
import ToggleOption from "./Option/ToggleOption";
import Grid2 from "@mui/material/Unstable_Grid2";

function DryrunPage() {
    const navigate = useNavigate();
    const [isResultEnabled, setIsResultEnabled] = useState(false);
    const handleResult = () => {
        if (isResultEnabled) {
            navigate(RESULT_ROUTE);
        }
    };

    const title = "Dryrun";

    return (
        <BackGround title={title}>
            <Container maxWidth={false} sx={{mt: 4}}>
                <Grid container spacing={2} sx={{display: 'flex', alignItems: 'stretch'}}>
                    <Grid item xs={8}>
                        <D_Log/>
                    </Grid>
                    <Grid item xs={4}>
                        <D_Stats/>
                    </Grid>
                </Grid>
                <D_Fig/>
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

function D_Log() {
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

function D_Stats() {
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

function D_Fig() {
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
export default DryrunPage;