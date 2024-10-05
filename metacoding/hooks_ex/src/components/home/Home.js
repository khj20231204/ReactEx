import React from 'react';
import styled from 'styled-components';

const Home = (props) => {

   /*props의 구조분해 할당
   props의 객체명과 변수명 boards가 같아야 한다*/
   let {boards, setBoards} = props; 
   let {number, setNumber} = props;
   let {userName} = props;

   console.log("home userName:"+userName);

   let StyledUserButton = styled.button`
      color : ${userName !== 'saram' ? 'blue' : 'red'};
      /* color : red; */
   `

   return (
      <div>
         <h1>홈페이지 입니다.</h1>
         <div>{number}</div>
         <StyledUserButton onClick={() => {
            setNumber(number+1);
         }}>증가</StyledUserButton>

         <button onClick={()=>{
            setBoards([]);
         }}>전체 삭제</button>
         {
            boards.map((v,i) => {
               return( 
               <>
                  <h2>{v.title}</h2>
                  <h4>{v.content}</h4>
               </>
            )
            })
         }
      </div>
   );
};

export default Home;