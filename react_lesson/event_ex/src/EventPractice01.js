import React, {useState} from "react";

const EventPractice01 = () => {

   const [username, setUsername] = useState('');
   const [msg, setMsg] = useState('');

   const onChangeUsername = (e) => {
      setUsername(e.target.value);
   }

   const onChangeMsg = (e) => {
      setMsg(e.target.value);
   }

   const onClick = () => {
      alert('usename:'+username+ " ,msg:"+msg);
      setUsername('');
      setMsg('');
   }

   return(
      <div>
         <h1>이벤트 연습</h1>
         <input type="text"
               name="username"
               placeholder="유저명"
               value={username}
               // onChange={onChangeUsername}
               onChange={(e) => {
                  onChangeUsername(e);
               }}
         />
         <input type = "text"
               name = "msg"
               placeholder="아무거나 입력"
               value={msg}
               onChange={onChangeMsg}
         />
         <button onClick={onClick}>확인</button>
      </div>

   )
};

export default EventPractice01;