import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data'
import { useState } from 'react';

function App() {

  let [shoes] = useState(data);

  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='mainPic'></div>

      {/* 
      .css에서 background-image : url() 로 설정할 때는 
      css파일이기 때문에 src폴더에 바로 사진 저장해야된다

      <img src={shoes01} width="100px"></img>로 img src에 이미지를 넣을 때는
      src에 바로 이미지를 저장하면 import를 해야된다.
      import shoes01 from './imgs/main.jpg' 
      
      public폴더에 이미지를 저장하면 
      */}
      <Container>
      <Row>
        {
          shoes.map((v,i) => {
             return( 
              <Col>
              <Product shoes={v} i={i}/> 
             </Col>
             )
          })
        }
      </Row>
    </Container>
    </div>
  );
}

const Product = (props) => {
  console.log(props);
  return(
    <div style={{textAlign:'center'}}>
      <img src={process.env.PUBLIC_URL + '/imgs/shoes'+(props.i+1)+'.jpg'} width={300}/>
      <div>상품명 : {props.shoes.title}</div>
      <div>가격 : {props.shoes.price}</div>
    </div>
  )

}
export default App;
