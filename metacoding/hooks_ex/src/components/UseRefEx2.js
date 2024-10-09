import React, { createRef, useRef, useState } from 'react';

const UseRefEx = () => {

   const [list,setList] = useState(
      [
         {id:1, name:'길동'},
         {id:1, name:'길동'}
      ])

   //const myRef = useRef();//스타일 변경
   const myRef = Array.from({length:5}).map(()=> createRef());  //createRef : Ref를 동적으로 생성

   return (
      <div>
         <button onClick={() => {
            console.log("myRef:"+myRef);
            myRef[1].current.style.backgroundColor='red'
         }}>색 변경</button>
         <div ref={myRef}>박스</div>        
         {list.map((v,i) => {
            return <h1 ref={myRef[i]}>{v.name}</h1>
         })}
      </div>
   );
};

export default UseRefEx;