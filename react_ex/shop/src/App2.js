import logo from './logo.svg';
import './App.css';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Main from './components/Main';
import Detail2 from './components/Detail2';
import data from './data';

function App() {

  let navigate = useNavigate(); //naviget('url')  Route에 정의해 놓은 url로 이동한다
  //navigate(1) 앞으로 페이지 이동
  //navigate(-1) 뒤로 페이지 이동

  let {shoes} = useState(data);
  
  return (
    <div className="App">
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate('/');
            }}>Home</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/detail');
            }}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail2 shoes={shoes}/>} />
        
        {/* /about/member는 member페이지만, /about/location는 location페이지만 출력 */}
        <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<div>member페이지</div>} />
        <Route path="/about/location" element={<div>location페이지</div>} />

        {/* Nested Routes : 여러 유사한 페이지를 노출 시킬 때, 문자나 뭐 박스만 살짝 살짝 바껴야하는 경우 */}
        {/* 
          path=member는 about페이지 안에 Outlet 위치에 member페이지 출력 
          path=location는 about페이지 안에 Outlet 위치에 location페이지 출력 
        */}
        {/* 
        <Route path="/about" element={<About />}>
            <Route path="member" element={<div>member페이지</div>} />
            <Route path="location" element={<div>location페이지</div>} />
        </Route> 
        */}

        <Route path="/TodayEvent" element={<TodayEvent/>}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>

      {/* <div className='flex'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div> */}
    
    </div>
  );
}

const TodayEvent = () => {
   return(
      <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
      </>
   )
}

const About = () => {

  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
