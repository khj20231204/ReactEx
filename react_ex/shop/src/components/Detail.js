import { useFetcher, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import { addItem } from "../store/customerData";

const Detail = (props) => {
   
   useEffect(() => {
      /*
      sideEffect : 함수의 핵심기능과 상관없는 부가기능
      어려운 연산
      서버에서 데이터 가져오는 작업
      타이머 장작하는 거
      */

      let a = setTimeout(() => {
         setAlter(false);
      }, 2000);

      return (() =>{
         clearTimeout(a);
      })

   },[])

   let [alter, setAlter] = useState(true);
   let [count, setCount] = useState(0);
   let [탭, 탭변경] = useState(0);

   /**
    * useParams : 주소에서 변수값으로 사용
    * <Route path="/detail/:id" element={<Detail shoesData={shoesData} />} />
    * 
    * /detial/:id로 사용하면 id값으로 입력되는 값을 useParams로 받아옴
    */
   const {id} = useParams();
   
   let shoes = props.shoesData.find((x) => {
      return   x.id == id; 
      //return값이 shoesData안의 배열 인자인 "객체"
      //x의 id가 id인 배열의 인자를 리턴하는데 배열의 인자가 객체이면 객체를 리턴
   })

   useEffect(()=>{
      let data = localStorage.getItem('watched')  //localStorage에서 watched 값 꺼내기
      data = JSON.parse(data) //문자열을 배열이나 객체로 변환(따옴표제거)
      data.push(shoes.title)  //객체 끝에 데이터 삽입
      data = new Set(data)    //Set으로 변환해서 중복 제거
      data = Array.from(data)  //Set을 다시 Array로 변환
      localStorage.setItem('watched',JSON.stringify(data)); //문자열로 localStorage에 삽입
   },[])

   let dispatch = useDispatch()

   return (
      <div className="container">

         {
            alter == true ? <div className="alter alter-warning">2초 이내 구매시 할인</div> : <div className="alter alter-warning"></div>
         }

      <br/>

      <button onClick={()=>{
         setCount(count+1);
      }} >count증가 버튼</button>

      <input type="text"></input>
      <input type="radio" value="option1" />
      
         <div className="row">
            <div className="col-md-6">
               <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
               <h4 className="pt-5">{shoes.title}</h4>
               <p>{props.shoesData[id].content}</p>
               <p>{props.shoesData[id].price}원</p>
               <button className="btn btn-danger" onClick={() =>{
                  dispatch(addItem({id:1, name:'red knit', count:0}));
               }}>주문하기</button> 
            </div>
         </div>

         <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{
               탭변경(0);
            }}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{
               탭변경(1);
            }}>Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" onClick={()=>{
               탭변경(2);
            }}>
               Disabled
            </Nav.Link>
            </Nav.Item>
         </Nav>

         <TabContent 탭={탭}></TabContent>
      </div> 
   )
}

function TabContent({탭}){
   /*
   if (탭 == 0){
      return <div style={{height:500}}>내용1</div>
   }else if (props.탭 == 1){
      return <div style={{height:500}}>내용2</div>
   }else{
      return <div style={{height:500}}>내용3</div> 
   }
   */

   let [fade, setFade] = useState('');

   useEffect(()=>{
      //setFade(' ');

      let a = setTimeout(() =>{ setFade('end') },10)
      
      return(
         clearTimeout(a),
         setFade('')
      )
   },[탭])

   /* return (<div className={`start ${fade}`}> */
   return (<div style={{height:'400px'}}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][탭]} 
   </div>)
}

export default Detail;