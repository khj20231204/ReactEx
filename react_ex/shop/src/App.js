import logo from './logo.svg';
import './App.css';
import {Button, Container, Nav, Navbar, Row, Col }from 'react-bootstrap';
import data from './data'
import { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet, useParams} from 'react-router-dom';
import Detail from './components/Detail';
import styled from 'styled-components'
import axios from 'axios';
import Cart from './components/Cart';


function App() {

   useEffect(()=>{
      localStorage.setItem('watched',JSON.stringify([]));
   },[])

   let obj = {name : "kim"};
   let obj2 = JSON.stringify(obj); 
   /* obj를 JSON으로 바꾸기위해서는 따옴표를 춰서 전부 글자로 바꾸게 되는데 JSON.stringify가 따옴표를 쳐준다 */
   localStorage.setItem('data', obj2);

   let data2 = localStorage.getItem('data');
   /*
      data2.name이렇게 점으로 접근 못  한다. .(점)으로 접근하는 것은 객체가 되는데 localStorage에서 불러온'data'는 이미 문자형태기 때문에 .(점)으로 접근이 안된다. 
   */
   let data3 = JSON.parse(data2); //kim

   const [shoesData,setShoesData] = useState(data);
   const [shoesData2,setShoesData2] = useState([]);
   const navigate = useNavigate();
   const [imgCount, setImgCount] = useState(1);
   let [countBtn, setCountBtn] = useState(0);
   let [displayLoading, setDisplayLoding] = useState(false);
   let [click, setClick] = useState('');

    let YellowBtn = styled.button`
      background : ${props => props.bg};
      color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
      padding : 10px;
   `

   let handleClick = () => {
      setClick(click +1);
   }

   useEffect(() => {
      if(click == 0){
      }
   },[click])

   useEffect(() => {
      
   },[displayLoading])

   fetch('address').then(결과 => 결과.json())

   return (
   <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
         <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
               <Nav.Link href="/">홈</Nav.Link>

               {/* Link태그 이용 */}
               <Link to="/detail">상세페이지</Link>

               <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
            </Nav>
         </Container>
      </Navbar>

      {/* <div className='mainImg'></div> */}

      <button onClick={() => {
         setDisplayLoding(true)
         axios.get('https://codingapple1.github.io/shop/data2.json')
         .then((e) => {
            let copyShoes = [...shoesData2, ...e.data];
            setShoesData2(copyShoes);
            setImgCount(imgCount+1);
            setDisplayLoding(false)
         })
         .catch(() => {
            alert("ajax error");
         })
      }}>상품 더 보기</button>

      <button onClick={() => {handleClick();}}>더보기 2</button>

      <Routes>
         {/* Route는 페이지 */}
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/" element={
            <Container>
               <Card1 shoesData={shoesData}></Card1>
               <Card2 shoesData2={shoesData2} imgCount={imgCount}/>
              {/* {shoesData2.map((e,i) => {
                  return(
                     <Card2 shoesData2={shoesData2[i]} key={i}></Card2>
                  )
              })} */}
          </Container>
         } />
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<ErrorPage></ErrorPage>} />
        
         <Route path="/detail/:id" element={<Detail shoesData={shoesData} />} />

         <Route path="/about" element={<About/>}>
            <Route path="member" element={<div>member 페이지</div>}/>
            <Route path="location" element={<div>location 페이지</div>}/>
         </Route>
         
         
      </Routes>
    </div>
  );
}

function ErrorPage(){
  return(
    <h2>찾는 페이지가 없습니다.</h2>
  )
}

function About(){
   return(
      <div>
         <h4>회사정보임</h4>
         <Outlet></Outlet>
         <Outlet></Outlet>
      </div>
   )
}

function Card2(props){

   let [presentCount] = useState(props.imgCount*3);

   return (
   <Row>
      {props.shoesData2.map((e,i) => {
         return(
            <Col key={i}>
               <img src={"/img2/shoes"+ [i+presentCount] +".jpg"} width="50%" onClick={()=>{
                  alert("이미지 클릭2");
               }}></img>
               <h4>{props.shoesData2[i].title}</h4>
               <p>{props.shoesData2[i].price}원</p>
               <p>{props.shoesData2[i].content}</p>
            </Col>
         )})}
   </Row>
   )
}

function Card1(props){
   return (
      <Row>
         {props.shoesData.map((e,i) => {
            return(
               <Col key={i}>
                  <img src={"/img2/shoes"+ [i] +".jpg"} width="50%" onClick={()=>{
                     
                     alert("이미지 클릭1")

                     localStorage.setItem("aaa")
                  }}></img>
                  <h4>{props.shoesData[i].title}</h4>
                  <p>{props.shoesData[i].price}원</p>
                  <p>상품 설명</p>
               </Col>
            )
         })}
      </Row>
   )
}


export default App;
