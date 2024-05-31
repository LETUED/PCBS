import React, {useRef, useEffect, useState} from "react";
import {Container} from "@mui/material";
import Title from "./Title";

function BackGround({title, children}) {
    return (
        <div>
            <Title title={title}/>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                /*TODO : 최소높이 하드코딩 되어있음*/
                minHeight: `91.35vh`,
                minWidth: '100%',
                backgroundColor: 'gray',
                flexWrap: 'wrap'  // 내용이 많을 경우 자동으로 다음 줄로 넘어가도록 설정
            }}>
                <Container sx={{
                    // padding: 0,
                    backgroundColor: 'white',
                    alignItems: 'top',
                    minHeight: `91.35vh`,
                    paddingLeft: '20px',
                }}>
                    {children}
                </Container>
            </Container>
        </div>
    );
}

export default BackGround;
