import logo from './logo.svg';
import './App.css';

import data from './data'
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';
import Main from './Main';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/detail" element={<Details/>}>
          <Route path="page1" element={<Page1/>}/>
          <Route path="page2" element={<Page2/>}/>
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
