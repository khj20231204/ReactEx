import {useState} from 'react';

const Say = () => {

   const [msg, setMsg] = useState('');
   const clickEnter = () => setMsg('안녕합니꺽');
   const clickLeave = () => {setMsg('안녕히 가십꺽')}

   return(
      <div>
         <button onClick={clickEnter}>입장</button>
         <button onClick={clickLeave}>퇴장</button>
         <h1>{msg}</h1>
      </div>
   );
}

export default Say;