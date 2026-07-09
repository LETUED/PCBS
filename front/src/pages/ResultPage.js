import React, {useState} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import BackGround from "./template/BackGround";
import MoveEvent from "./Button/MovePage";
import {MAIN_PAGE_ROUTE, RESULT_ROUTE} from "./routes";
import Title from "./template/Title";
import {useNavigate} from "react-router-dom";
import image from "../img/Figure_0.png"

function ResultPage() {
    const title = "Result";
    return (
        <BackGround title={title}>
            <Container maxWidth={false} sx={{mt: 4}}>
                <Grid container spacing={2} sx={{display: 'flex', alignItems: 'stretch'}}>
                    <Grid item xs={6}>
                        <R_Roi/>
                    </Grid>
                    <Grid item xs={6}>
                        <R_Rate/>
                    </Grid>
                </Grid>
                <R_Fig/>
                <Grid container spacing={2} sx={{display: 'flex', alignItems: 'stretch'}}>
                    <MoveEvent route={MAIN_PAGE_ROUTE}/>
                </Grid>
            </Container>
        </BackGround>
    );
}

function R_Fig() {
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
                {/*<img src={image} alt="fig" style={{width: '100%'}}/>*/}
                <div style={{width: '50%', margin: 'auto'}}>
                    <img
                        src={image}
                        alt="설명"
                        style={{width: '180%', height: 'auto', maxWidth: '180%'}}
                    />
                </div>
            </Box>
        </div>
    );
}

function R_Roi() {
    return (
        <div>
            <Typography variant="h5" sx={{mb: 2}}>
                <h1>Roi</h1>
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
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
            </Box>
        </div>
    );
}

function R_Rate() {
    return (
        <div>
            <Typography variant="h5" sx={{mb: 2}}>
                <h1>Rate</h1>
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
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
                <Typography variant="h5" gutterBottom>
                    News1
                </Typography>
            </Box>
        </div>
    );
}
export default ResultPage;
