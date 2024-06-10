import React, { useState, useEffect } from "react";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import BackGround from "./template/BackGround";
import SandDataForm from "./components/SandDataForm";
import {RESULT_ROUTE} from "./routes";
import { exportLocalStorageAsJson } from "./utils";
import img from "../img/Figure_0.png";

function BacktestPage() {
    const [logData, setLogData] = useState('');

    useEffect(() => {
        const sendData = async () => {
            const allDataJson = exportLocalStorageAsJson();
            console.log('All Data JSON:', allDataJson);

            try {
                // 데이터를 POST 요청으로 서버로 전송
                const response = await fetch('http://localhost:5000/api/process_data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: allDataJson,
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                console.log('POST 요청 성공.');
            } catch (error) {
                console.error('Flask로 데이터 전송 중 오류:', error);
            }
        };

        const listenForLogs = () => {
            // SSE를 통해 로그 수신
            const eventSource = new EventSource('http://localhost:5000/api/logs');
            eventSource.onmessage = (event) => {
                setLogData((prevLogData) => `${prevLogData}\n${event.data}`);
            };
            eventSource.onerror = (error) => {
                console.error('EventSource 실패:', error);
                eventSource.close();
            };

            return () => {
                eventSource.close();
            };
        };

        sendData();
        listenForLogs();
    }, []);

    const title = "Backtest";

    return (
        <BackGround title={title}>
            <Container maxWidth={false} sx={{ mt: 4 }}>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <Grid item xs={8}>
                        <Log logData={logData} />
                    </Grid>
                    <Grid item xs={4}>
                        <SandDataForm />
                    </Grid>
                </Grid>
                <B_Fig />
                <Button onClick={() => window.location.href = RESULT_ROUTE} variant="contained" sx={{ mt: 2 }}>Result</Button>
            </Container>
        </BackGround>
    );
}

function Log({ logData }) {
    return (
        <div>
            <Typography variant="h5" sx={{ mb: 2 }}>
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
                    minHeight: '350px',
                    overflowY: 'auto'
                }}
            >
                {logData.split('\n').map((line, index) => (
                    <Typography key={index}>{line}</Typography>
                ))}
            </Box>
        </div>
    );
}

function B_Fig() {
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
                    minHeight: '350px',
                    overflowY: 'auto'
                }}
            >
                {/*<img src={image} alt="fig" style={{width: '100%'}}/>*/}
                <div style={{width: '50%', margin: 'auto'}}>
                    {/*<img*/}
                    {/*    src={image}*/}
                    {/*    alt="설명"*/}
                    {/*    style={{width: '180%', height: 'auto', maxWidth: '180%'}}*/}
                    {/*/>*/}
                </div>
            </Box>
        </div>
    );
}

export default BacktestPage;
