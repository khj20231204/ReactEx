
import {useEffect, useState} from 'react';

function UseEffectEx() {

   const [data, setData] = useState(0);
   const [search, setSearch] = useState(0);

   let downLoad = () => {
      setData(5);
   }

   useEffect(() => {
      console.log("useEffect 실행됨");
      downLoad();
   },[search])

   return (
      <div>
         <button onClick={() => {
            setSearch(2);
         }}>검색하기</button>
         <h2>데이터 : {data}</h2>
         <button onClick={() => {
            setData(data+1);
         }}>더하기</button>
      </div>
   );
}

export default UseEffectEx;
