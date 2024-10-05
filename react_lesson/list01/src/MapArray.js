import React, {useState} from "react";

const MainArray = () => {

   const numbers = [1,3,5];
   const subject = ['자바', '오라클','JSP','파이썬']
   
   return (
      <div>
         <ul>
            { numbers.map((v,i) => {
                  return <li key={i}>{v}</li>
               })}
            <br/>
            { subject.map((name,index) => {
               console.log({index, name});
               return <li>name:{name}, index:{index}</li>
            })}
            <br/>
            { subject.map(function(name, index){
               return <li>name:{name}, index:{index}</li>
            })}
         </ul>
      </div>
   );
}

export default MainArray;