import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';            // Main 페이지
import PostWritePage from './component/page/PostWritePage';  // 글작성 페이지
import PostViewPage from './component/page/PostViewPage';    // 상세 페이지

const MainTitleText = styled.p`
  font-size: 24px;
  font-weigth: bold;
  text-align: center
`;

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}></Route>
      <Route path="post-write" element={<PostWritePage/>}></Route>
      <Route path="post/:postid" element={<PostViewPage/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
