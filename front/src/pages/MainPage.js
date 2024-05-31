import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CONFIG_ROUTE } from "./routes";
import BackGround from "./template/BackGround";
import MoveEvent from "./Button/MovePage";
import NewsBox from "./components/NewsBox";
import TopDataBox from "./components/TopDataBox";
import M_fig from "./components/M_fig";

function MainPage() {
    const title = 'Main Page';
    const [selectedCoin, setSelectedCoin] = useState(null);
    const navigate = useNavigate();

    return (
        <BackGround title={title}>
            <Container maxWidth={false} sx={{ mt: 4 }}>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <Grid item xs={8}>
                        <NewsBox />
                    </Grid>
                    <Grid item xs={4}>
                        <TopDataBox onSelectCoin={setSelectedCoin} />
                    </Grid>
                </Grid>
                <M_fig coinName={selectedCoin} />
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <MoveEvent route={CONFIG_ROUTE} />
                </Box>
            </Container>
        </BackGround>
    );
}

export default MainPage;
