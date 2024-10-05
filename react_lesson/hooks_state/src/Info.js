import React, {useState} from 'react';

const Info = () => {

   const [name, setName] = useState('');
   const [nickname, setNickname] = useState('');

   const onChangeName = (e) => {
      setName(e.target.value);
   }

   const onChangeNickname = (e) => {
      setNickname(e.target.value);
   }

   return (
         <div>
            <input onChange={onChangeName}></input>
            <input onChange={onChangeNickname}></input>
         
            <h2>이름 : {name}</h2>
            <h2>닉네임 : {nickname}</h2>
         </div>
   );
};

export default Info;