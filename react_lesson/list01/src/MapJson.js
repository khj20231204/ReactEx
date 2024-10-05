import React, {useState} from "react";

const MapJson = () => {

   const students = [
      {id:1, name:'홍길순'},
      {id:2, name:'아차'},
      {id:3, name:'이 순간이'},
      {id:4, name:'기회'}
   ];

   return (
      <ul>

         {students.map((v,i) => { //v는 students의 모든 값을 받아온다, id와 name를 구별해줘야 한다.
            return <li>name:{v.name}, id:{v.id}</li>
         })}

      </ul>
   )
}

export default MapJson;