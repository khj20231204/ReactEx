import React, {useState} from "react";

// 평균을 구해주는 함수
const getAverage = (numbers) => {
   if(numbers.length === 0) return 0;

   //reduce() : numbers배열 원소들의 합을 구해준다.
   const sum = numbers.reduce((a,b) => a+b);

   return sum / numbers.length;
}

// Average 함수형 컴포넌트
const Average = () => {

   const [list, setList] = useState([]); //list는 배열로 초기화
   const [number, setNumber] = useState();

   const onChange = (e) => {
      setNumber(e.target.value);
      console.log(number);
   }

   const onInsert = (e) => {
      //concat() : 배열을 결합하여 새로운 배열을 생성하는 함수
      const nextList = list.concat(parseInt(number));
      console.log(nextList);
      setList(nextList);
      setNumber('');
   }

   return (
      <div>
         <input value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <div>{getAverage(list)}</div>
         <ul>

            {/* {list.map((v,i) => (
               <li key={i}>{v}</li>
            ))} */}

            {list.map((v,i) => {
              return <li key={i}>{v}</li>
            })}

         </ul>
      </div>
   );
};

export default Average;