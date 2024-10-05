import './App.css';
import { useState } from 'react';

function UseStateEx() {
   let [number, setNumber] = useState(1);
   let [users, setUsers] = useState([]);

   const add = () => {
      setNumber(number + 1);
   }

   const download = () => {
      let sample = [
         {id:1, name:"홍길동"},
         {id:2, name:"무전기"},
         {id:3, name:"임꺽정"},
      ]
   
      sample.push({id:5, name:"조자룡"})
      console.log(sample);
      setUsers(sample)

   //setUsers([...users, ...sample])
   //setUsers(sample);
   //setUsers([...sample]);

   }

   return (
   <div>
      {console.log("return")}
      {users.map(n => <h1>{n.id}. {n.name}</h1>)}
      <button onClick={download}>다운로드</button> 
      {users.map(n => <h1>{n.id}. {n.name}</h1>)}
   </div>
   );
}

export default UseStateEx;
