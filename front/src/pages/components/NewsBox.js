import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

function NewsBox() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/news') // Flask 서버의 URL을 명시적으로 작성
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data); // 데이터 확인을 위한 콘솔 출력
                if (Array.isArray(data)) {
                    setNewsData(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                News
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
                    overflowY: 'auto',
                    backgroundColor: '#f9f9f9'
                }}
            >
                {newsData.map((news, index) => (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, flexShrink: 0 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, height: 150, borderRadius: '10px' }}
                            image={news.image}
                            alt={news.title}
                        />
                        <CardContent>
                            <Typography variant="h6" component="a" href={news.url} target="_blank" sx={{ textDecoration: 'none' }}>
                                {news.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {news.date} - {news.author}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {news.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default NewsBox;
