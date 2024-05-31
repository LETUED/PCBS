import React from "react";
import {Typography, Box, Container} from "@mui/material";

function Title({ title }) {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: '100%',
            paddingTop: '15px',
            paddingBottom: '15px',
            // paddingLeft: '20px',
            // paddingRight: '20px',
            backgroundColor: '#cfe8fc',
            position: 'sticky',  // 스크롤 시 상단에 고정
            top: 0,  // 상단에 고정
            zIndex: 1100,  // 다른 컨텐츠 위에 레이어
        }}>
            {/*TODO : 글씨 볼드체로 하면 좋을꺼 같은데*/}
            {/*TODO : 글씨 스타일 전역변수로 해서 불러올수 있음 설명 스타일, 제목 스타일 이런 식으로*/}
            <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h3" sx={{fontFamily: 'Roboto, sans-serif'}}>
                    CSB
                </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', flexGrow: 1}}>
                <Typography variant="h3" sx={{fontFamily: 'Roboto, sans-serif'}}>
                    {title}
                </Typography>
            </Box>
            <Box sx={{visibility: 'hidden', display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h3" sx={{fontFamily: 'Roboto, sans-serif'}}>
                    CSB
                </Typography>
            </Box>
        </Container>
    );
}

export default Title;
