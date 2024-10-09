import React, { useMemo, useState } from 'react';

console.log("1 완전 밖에")

const UseMemoEx2 = () => {
   console.log("2 컴포넌트 안")
   let [list, setList] = useState([1,2,3,4]);
   let [str, setStr] = useState('합계')
   
   let addList = () => {
      let sum = 0 ;
      list.forEach(i => sum = sum+i)
      
      console.log("sum:"+sum);
      
      return sum;
   }
   
   let addMemo = useMemo(() => addList(),[list])

   return (
      <div>
      <button onClick={() => setStr('안녕')}>문자 바꾸기</button>
      <button onClick={() => {
         setList([...list,10])
      }}>더하기</button>
      <br></br>
         {str} : {addList()}
         <br></br>
         <div onClick={addList}>클릭</div>
      </div>
   );
};

export default UseMemoEx2;