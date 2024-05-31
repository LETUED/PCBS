import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import {MAIN_NEWS_PAGE_ROUTE,MAIN_PAGE_ROUTE,INTRO_ROUTE,CONFIG_ROUTE,STRATEGY_ROUTE,BACKTEST_ROUTE,DRYRUN_ROUTE,RESULT_ROUTE} from "./pages/routes";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import ConfigPage from "./pages/ConfigPage";
import StrategyPage from "./pages/StrategyPage";
import BacktestPage from "./pages/BacktestPage";
import DryrunPage from "./pages/DryrunPage";
import ResultPage from "./pages/ResultPage";
import MainNewsPage from "./pages/MainNewsPage";
import TestShowJson from "./pages/TestShowJson";
//Todo: 페이지 경로 고쳐놓기
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/ConfigPage" element={<ConfigPage />} />
                <Route path="/StrategyPage" element={<StrategyPage />} />
                <Route path="/BacktestPage" element={<BacktestPage />} />
                <Route path="/DryrunPage" element={<DryrunPage />} />
                <Route path="/ResultPage" element={<ResultPage />} />
                <Route path="/MainNewsPage" element={<MainNewsPage/>} />
                <Route path="/TestShowJson" element={<TestShowJson/>} />
                <Route path="*" element={<p>Not Found</p>} /> {/* 404 Not Found 페이지 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
