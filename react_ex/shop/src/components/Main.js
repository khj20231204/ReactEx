import {Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from '../data.js';
import ReactDOM from 'react-dom/client';
import { Navigate, useNavigate } from 'react-router-dom';

const Main = () => {
   
   let [shoes] = useState(data);
   

   return (
      <>
      {/* <div style={{backgroundImage:'URL('+bg+')', height:300}}></div> */}
      <div className='main_pic'></div>

      <Container>
      <Row>
         { shoes.map((e,i) => {
            return (
               <Col key={i}>
                  <Shoes title={e.title} content={e.content} price={e.price} imgCount={i}></Shoes>
               </Col>
            );
         }) }
      </Row>
      </Container>
      </>
   )
}

const Shoes = (props) => {
   
   let navigate = useNavigate();

   return (
     <div>
          {/* public폴더에 이미지를 넣으면 바로 public폴더까지 접근가능 */}
         <img src={process.env.PUBLIC_URL + 'img2/shoes'+ props.imgCount +'.jpg'} width={'80%'} style={{cursor:'pointer'}} onClick={()=>{
                    navigate('/detail')
                  }}/> 
         <h4>{props.title}</h4>
         <p>{props.content}</p>
         <p>가격 : {props.price}</p>
     </div>
   )
 }

 export default Main;