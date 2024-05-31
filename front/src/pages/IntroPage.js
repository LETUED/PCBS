import React, { useState } from "react";
import {Button, Box, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConsentDialog from './Action/ConsentDialog';
import { MAIN_PAGE_ROUTE, TEST_ROUTE } from './routes';
import BackGround from "./template/BackGround";

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
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
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
        <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{border: '2px solid grey', borderRadius: '10px'}}
                    >
                        아무글
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{border: '2px solid grey', borderRadius: '10px'}}
                    >
                        아무사진
                    </Box>
                </Grid>
            </Grid>
    );
}

function MainContent2() {
    return (
        <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{border: '2px solid grey', borderRadius: '10px'}}
                    >
                        아무글
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        my={4}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        p={2}
                        sx={{border: '2px solid grey', borderRadius: '10px'}}
                    >
                        아무사진
                    </Box>
                </Grid>
            </Grid>
    );
}