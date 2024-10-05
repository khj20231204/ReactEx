import React, {useState} from 'react'

const Say = () => {

   const [msg, setMsg] = useState('');
   const [color, setColor] = useState('');

   const onClickEnter = () => { setMsg('입장 하세요')}
   const onClickLeave = () => { setMsg('퇴장 하세요')}

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>

         <h1 style={{color}}>{msg}</h1>     
          
         <button style={{color:'green'}} onClick={()=>{setColor('green')}}>초록색</button>
         <button style={{color:'blue'}} onClick={()=>{setColor('blue')}}>파란색</button>
         <button style={{color:'pink'}} onClick={()=>{setColor('pink')}}>보라색</button>
      </div>
   ); 
};

export default Say;