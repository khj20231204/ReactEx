import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

const HomePage = () => {

   //http요청(jquery-ajax, js-fetch, axios-외부라이브러리)

   const [boards, setBoards] = useState([]);
   const [number, setNumber] = useState(0);
   const [userName, setUserName] = useState('saram');
   
   console.log("homepage userName:"+userName);
   //빈 배열은 한번만 실행
   useEffect(() => {
      //다운로드 가정
      let data = [
         {id:1, title:'제목1', content:'내용'},
         {id:2, title:'제목2', content:'내용2'},
         {id:3, title:'제목3', content:'내용3'},
      ]

      setBoards(data);
   },[])

   return (
      <div>
         <Header />
         <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber} userName={userName}/>
         <Footer/>
      </div>
   );
};

export default HomePage;