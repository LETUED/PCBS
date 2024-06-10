import React, { useState, useEffect } from 'react';
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
    const [selectedCoin, setSelectedCoin] = useState(() => {
        // 초기값을 로컬스토리지에서 가져오기
        return localStorage.getItem('coin') || null;
    });
    const navigate = useNavigate();

    // selectedCoin이 변경될 때마다 로컬스토리지에 저장
    useEffect(() => {
        if (selectedCoin !== null) {
            localStorage.setItem('coin', selectedCoin);
        }
    }, [selectedCoin]);

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
