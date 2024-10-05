import React,{useState, useEffect} from 'react'

const Info2 = () => {

   const [name, setName] = useState('');
   const [nickname, setNickname] = useState('');

   const onChangeName = (e) => {
      setName(e.target.value);
   }

   const onChangeNickname = (e) => {
      setNickname(e.target.value);
   }

   useEffect(() => {
      console.log('렌더링이 완료 되었습니다.');
      console.log({name, nickname});
   }, []);
   //하단 가장 뒤에 [] 비어있는 배열을 추가하면 useEffect가 처음 렌더링될 때 한번만 실행됨

   return (
      <div>
         <div>
            <input onChange={onChangeName}/>
            <input onChange={onChangeNickname}/>
         </div>
         <div>이름 : {name}</div>
         <div>닉네임 : {nickname}</div>
      </div>
   );
};

export default Info2;