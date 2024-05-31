// import React, { useEffect, useState } from 'react';
// import { Container, Box, Typography } from '@mui/material';
// import BackGround from './template/BackGround';
// import { loadFromCookies } from './utils';
//
// function ResultPage() {
//   const title = "Result";
//   const [config, setConfig] = useState(null);
//   const [strategy, setStrategy] = useState(null);
//
//   useEffect(() => {
//     const savedConfig = loadFromCookies('config');
//     const savedStrategy = loadFromCookies('strategy');
//     setConfig(savedConfig);
//     setStrategy(savedStrategy);
//   }, []);
//
//   if (!config || !strategy) {
//     return <Typography>Loading...</Typography>;
//   }
//
//   return (
//     <BackGround title={title}>
//       <Box sx={{ mt: 4, width: '100%' }}>
//         <Container maxWidth="sm" sx={{ mt: 4 }}>
//           <Typography variant="h5" sx={{ mb: 2 }}>
//             <h1>설정 결과</h1>
//           </Typography>
//           <Box
//             my={4}
//             p={2}
//             sx={{ border: '2px solid grey', borderRadius: '10px' }}
//           >
//             <Typography>토글 옵션: {config.toggleOption ? '활성화' : '비활성화'}</Typography>
//             <Typography>선택 옵션: {config.selectOption}</Typography>
//             <Typography>입력 옵션: {config.inputOption}</Typography>
//             <Typography>슬라이더 옵션: {config.sliderOption}</Typography>
//             {/*<Typography>드롭다운 옵션: {config.dropDownOption}</Typography>*/}
//             {/*<Typography>전략 토글: {strategy.strategyToggle ? '활성화' : '비활성화'}</Typography>*/}
//             {/*<Typography>전략 선택: {strategy.strategySelect}</Typography>*/}
//             {/*<Typography>전략 입력: {strategy.strategyInput}</Typography>*/}
//             {/*<Typography>전략 슬라이더: {strategy.strategySlider}</Typography>*/}
//             {/*<Typography>전략 드롭다운: {strategy.strategyDropDown}</Typography>*/}
//           </Box>
//         </Container>
//       </Box>
//     </BackGround>
//   );
// }
//
// export default ResultPage;
