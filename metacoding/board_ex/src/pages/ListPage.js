import React, { useEffect } from 'react';
import styled from 'styled-components'

const ListPage = (props) => {
   
   let list = [
      {id:1, title:'제목1'},
      {id:2, title:'제목2'},
      {id:3, title:'제목3'},
      {id:4, title:'제목4'},
      {id:5, title:'제목5'},
   ]
   
   let StyledListDiv = styled.div`
   width: 100%;
   height: 100px;
   border: 1px solid black;
   margin: 10px;
   padding: 10px;
   display: flex; //정렬하기 위해서 설정
   justify-content: space-between; //글자와 버튼을 양옆으로 찟는다
   align-items: center; //세로 가운데 정렬
   `

   let {data} = props;

   console.log(data)   

   
   return (
      <div>
       
      
         <hr/>
         {list.map((v,i) => {
           return( <StyledListDiv>{v.id}. {v.title} <button style={{width:150, height:50}}>삭제</button></StyledListDiv>)
         })}
      </div>         
   );
};

export default ListPage;