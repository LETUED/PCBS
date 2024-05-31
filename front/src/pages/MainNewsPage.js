import React, {useState} from 'react';
import {CssBaseline, Container, Box, Grid, Typography, styled, Avatar, Paper} from "@mui/material";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {STRATEGY_ROUTE,MAIN_PAGE_ROUTE} from "./routes";
import BackGround from "./template/BackGround";
import MoveEvent from "./MainPage";
function MainNewsPage() {
    const title = 'Main Page';
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleMainPage = () => {
        setOpen(false);
        navigate(MAIN_PAGE_ROUTE);
    };

    return (
        <BackGround title={title}>
            <Container sx={{mt: 2}}>
                <Stack direction={"row"} spacing={2}>
                    <Button variant="text" onClick={handleMainPage}>
                        Trade Data
                    </Button>
                    <Button variant="text">
                        Trade News
                    </Button>
                </Stack>
            </Container>
            <MoveEvent route={STRATEGY_ROUTE}/>
        </BackGround>
    );
}

export default MainNewsPage;
