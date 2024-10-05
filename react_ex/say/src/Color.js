import { useState } from "react";

const Color = () => {

   const [msg, setMsg] = useState('');
   const clickEnter = () => {setMsg('입장 시작!')}
   const clickLeave = () => {setMsg('퇴장 시작!')}

   const [color, setColor] = useState('');

   return(
      <div>

         {console.log("color component")}

         <button onClick={clickEnter}>입장</button>
         <button onClick={clickLeave}>퇴장</button>
         
         <h1 style={{color}}>{msg}</h1>
         
         <button onClick={()=>{
            setColor('red');
         }}>빨간색</button>
         
         <button onClick={()=>{setColor('blue')}}>초록색</button>
      </div>
   );
}

export default Color;