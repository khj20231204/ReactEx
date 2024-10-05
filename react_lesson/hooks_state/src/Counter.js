   import React, {useState} from 'react';

   const Counter = () => {
      //const [변수, set함수] = userState(초기값);
      const [count, setCount] = useState(0)

      const onChangeCount = (e) =>{
         console.log("ddf");
         setCount(count+1);
      }

      return (
         <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>클릭1</button>
            <button onClick={onChangeCount}>클릭2</button>
         </div>
      );
   }

   export default Counter;