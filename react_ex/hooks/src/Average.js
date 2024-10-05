import React, {useState} from 'react'

const getAverage = (numbers) => {
   if(numbers.length > 0){

      const total =  numbers.reduce((a,b) => a+b);

      return total / numbers.length;
   }
}

const Average = () => {

   const [list, setList] = useState([]);
   const [value, setValue] = useState('');

   //onchnage - 숫자 출력
   const onChange = (e) => {
      setValue(e.target.value);
   }
   //클릭 - 숫자 배열에 등록
   const onInsert = (e)=> {
      const v = list.concat(parseInt(value));
      setList(v);
      setValue('');
   }

   return (
      <div>
         <input value={value} onChange={onChange}></input>
         <button type="button" onClick={onInsert}>등록</button>
         <div>{getAverage(list)}</div>
         <ul>
            {list.map((v,i) => {
               return <li key={i}>{v}</li>
            })}
         </ul>
      </div>
   )
}

export default Average;