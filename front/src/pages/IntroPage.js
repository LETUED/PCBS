import React, { useState } from "react";
import { Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConsentDialog from './Action/ConsentDialog';
import { MAIN_PAGE_ROUTE, TEST_ROUTE } from './routes';
import BackGround from "./template/BackGround";
import img1 from '../img/1.jpg';
import img2 from '../img/2.png';

export default function IntroPage() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleAgree = () => {
        setOpen(false);
        navigate(MAIN_PAGE_ROUTE);
    };
    const handleTest = () => {
        setOpen(false);
        navigate(TEST_ROUTE);
    };

    return (
        <BackGround title="">
            <MainContent1 />
            <MainContent2 />
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4 }}>
                <Button variant="contained" onClick={handleOpen}>
                    Agree?
                </Button>
            </Box>
            <ConsentDialog open={open} onClose={handleClose} onAgree={handleAgree} />
        </BackGround>
    );
}

function MainContent1() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={5}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={2}
                    sx={{
                        border: '2px solid grey',
                        borderRadius: '10px',
                        width: '80%',
                        height: '350px'
                    }}
                >
                    <Typography variant="h6" align="center">
                        뉴스정보와 코인 현황,을 확인해보세요
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={7}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={2}
                    sx={{
                        border: '2px solid grey',
                        borderRadius: '10px',
                        width: '80%',
                        height: '350px'
                    }}
                >
                    <img src={img1} alt="News and Coin Status" style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                </Box>
            </Grid>
        </Grid>
    );
}

function MainContent2() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={7}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={2}
                    sx={{
                        border: '2px solid grey',
                        borderRadius: '10px',
                        width: '100%',
                        height: '350px',
                    }}
                >
                    <img src={img2} alt="Test Your Strategy" style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={2}
                    sx={{
                        border: '2px solid grey',
                        borderRadius: '10px',
                        width: '100%',
                        height: '350px',
                    }}
                >
                    <Typography variant="h6" align="center">
                        정보를 확인후 자신의 전략을 테스트해보세요
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
