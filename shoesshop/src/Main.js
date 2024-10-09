import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Main = () => {
   
   let [shoes] = useState(data);
   let navigate = useNavigate();

   let style1 = {
      color : 'red',
      
   }

   return (
      <div>
      <Header/>
      <Container>
      <button onClick={ ()=>{ navigate(1) } }>앞으로</button>
      <button onClick={ () => navigate(-1) }>뒤로</button>
         <Row>
         {
            shoes.map((v,i) => {
               return( 
               <Col>
                  <Product shoes={v} i={i+1}/> 
               </Col>
               )
            })
         }
         </Row>
      </Container>
      </div>
   );
};

const Product = (props) => {
   console.log(props);
   return(
     <div style={{textAlign:'center'}}>
       <img src={process.env.PUBLIC_URL + '/imgs/shoes'+(props.i)+'.jpg'} width={300}/>
       <div>상품명 : {props.shoes.title}</div>
       <div>가격 : {props.shoes.price}</div>
     </div>
   )
 
 }
export default Main;