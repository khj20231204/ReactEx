import '../App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

function Main2(props){
   
   let [loading, setLoading] = useState(false);  // 로딩 상태를 관리하는 상태 변수
   let [alertmore, setAlertmore] = useState(false);  // 추가 상품 없음 알림 상태를 관리하는 상태 변수
   let [click, setClick] = useState(0);  // 버튼 클릭 횟수를 관리하는 상태 변수
 
   let handleClick = function(){
     setClick(click + 1);  // 버튼 클릭 시 클릭 횟수를 1 증가시킴
   }
 
   let moreProduct = function() {
     setLoading(true);  // 로딩 상태를 true로 설정하여 로딩 중임을 표시
 
     let url;
     if (click === 1) {
       url = 'https://codingapple1.github.io/shop/data2.json';  // 첫 번째 클릭 시 데이터2.json을 가져옴
     } else if (click === 2) {
       url = 'https://codingapple1.github.io/shop/data3.json';  // 두 번째 클릭 시 데이터3.json을 가져옴
     } else if (click > 2) {
       setAlertmore(true);  // 세 번째 클릭 이상일 경우 추가 상품 없음 알림 상태를 true로 설정하여 알림을 표시
       setLoading(false);  // 로딩 상태를 false로 설정하여 로딩을 종료
       return;  // 중복 호출 방지를 위해 함수를 종료
     }
 
     axios.get(url)  // axios를 사용하여 URL에서 데이터를 가져옴
       .then((response) => {
         let newProduct = response.data;  // 가져온 데이터를 newProduct 변수에 저장
         let copyShoes = [...props.shoes, ...newProduct];  // 기존 상품 목록(props.shoes)과 새로운 상품(newProduct)을 합친 새로운 배열을 생성
         props.setShoes(copyShoes);  // 합쳐진 상품 목록을 설정
         setLoading(false);  // 로딩 상태를 false로 설정하여 로딩을 종료
       })
       .catch(() => {
         console.log(`실패자`);  // 요청 실패 시 에러 처리
       });
   }
 
   useEffect(() => {
     if (click !== 0) {
       moreProduct();  // 클릭 횟수가 0이 아니면 moreProduct 함수를 호출하여 추가 상품 가져오기
     }
   }, [click]);  // click 상태 변수가 변경될 때마다 useEffect가 실행되도록 설정
 
   return (
     <>
       <div className="main-bg" style={{backgroundImage : 'url(/img2/shose_main.jpg)'}}></div>
       <div className="container">
         <div className="row">
           {loading && <Loading />}  // 로딩 중인 경우 Loading 컴포넌트를 렌더링
           {alertmore && <Alertmore />}  // 추가 상품 없음 알림이 있는 경우 Alertmore 컴포넌트를 렌더링
           {
             props.shoes.map ((a, i) => (<Product shoes={props.shoes} i={i} key={i} />))  // 상품 목록(props.shoes)을 순회하며 Product 컴포넌트를 렌더링
           }
         </div>
       </div>
       <button className="" onClick={()=> { handleClick(); }}>더보기</button> 
     </>
   )
 }
 
 function Product(props){
   return(
      <>
         <img src={"/img2/shoes"+ [props.i] +".jpg"} width="50%"></img>
         <h4>{props.shoes.title}</h4>
         <p>{props.shoes.price}원</p>
         <p>상품 설명</p>
      </>
   )
 }

 function Loading(){
   return (
     <div className="alert alert-warning">
       상품 로딩중
     </div>
   )
 }
 
 function Alertmore(){
   return (
     <div className="alert alert-warning">
       상품이 더 없습니다.
     </div>
   )
 }

 export default Main2;

