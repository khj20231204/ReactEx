import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';            // Main 페이지
import PostWritePage from './component/page/PostWritePage';  // 글작성 페이지
import PostViewPage from './component/page/PostViewPage';    // 상세 페이지

// MainTitleText는 p태그와 같다는 의미
const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter>
            <MainTitleText>미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />   {/* index : 기본 자식컴포넌트 */}
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
