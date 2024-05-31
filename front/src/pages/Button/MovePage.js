import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Button from "@mui/material/Button";

function MoveEvent({route}) {
    const navigate = useNavigate(); // navigate 함수 사용

    const handleEvent = () => {
        navigate(route); // navigate 함수를 이용해 route로 이동
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                <Button variant="contained" onClick={handleEvent}>
                    Next
                </Button>
            </Box>
        </Container>
    );
}

export default MoveEvent;
