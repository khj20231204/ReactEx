import {useMemo, useState} from 'react'

let UseMemoEx = () => {

   const [list, setList] = useState([1,2,3,4]);
   const [str, setStr] = useState('합계');
   
   let getAddResult = () => {
      let tot = 0;
      list.forEach((v,i,a) => tot += v)
      /* setSum(tot); */
      console.log("getAddResult안의 tot:",tot)
      return tot;
   }
   
   //useMemo('어떤 함수를 메모할 것인가','언제 실행되게 할 것인가')
   const addResult = useMemo(() => {
      getAddResult()
   } ,[list]) //list가 변경되었을 때 getAddResult()를 실행

   return (
      <div>
         <button onClick={()=>{setStr('안녕')}}>문자 변경</button>
         <button onClick={()=>{setList([...list,5])}}>리스트 값 추가</button>
         <br/>
         {list.map((v,i) => {
            return <h3 key={i}>{v}</h3>
         })}
         <div>
            {/* {str} : {getAddResult()} */}
            {str} : {addResult}
         </div>
      </div>
   )
}

export default UseMemoEx;