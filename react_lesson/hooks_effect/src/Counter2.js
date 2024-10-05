import React,{useState, useEffect} from 'react';

const Counter2 = () => {

   const [count, setCount] = useState(0);

   //useEffect는 리액트 컴포넌트가 랜더링 될 때마다 특정 작업이 수행되도록
   //설정할 수 있는 훅
   useEffect(() => {
      document.title = count + '번 클릭';
      console.log(count + '번 클릭');
   });

   return (
      <div>
         <p>총 {count}번 클릭 했습니다.</p>
         <button onClick={() => setCount(count+1)}>클릭</button>
      </div>
   );
}

export default Counter2;