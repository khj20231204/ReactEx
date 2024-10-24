import React, { useContext, useState } from 'react'; //useContext 임포트
import { Context1 } from './App'; //Context1 임포트

const Details = () => {

   let v = useContext(Context1) 
   /* useContext:Context를 사용하겠다, Context1을 넣어서  */
   let {stock, shoes} = useContext(Context1)
   /* 구조분해 할당으로 useContext 값을 가져온다 */

   return (
      <div>
         <h1>Details home</h1>
         {stock.map((v,i)=> <h2>{v}</h2> )}
         {shoes}
      </div>
   );
};

export default Details;