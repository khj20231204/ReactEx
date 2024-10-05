import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//1.실행 과정(index.html) - SPA
//2.JSX문법

const a = [1,2,3];
const b = a.slice(0,2);
const d = [...a.slice(0,2)]
const c = [a.slice(0,2)];
console.log(`b[0]:${b[0]} , c[0]:${c[0]} , d[0]:${d[0]}`); //

const users = [
   {id:1, name:'aaa', phone:111},
   {id:2, name:'bbb', phone:222},
   {id:3, name:'ccc', phone:333}
]

const user2 = {id:2, name:'ddd'}

users.map((e, i) => {

   if(e.id === 2){
      e.name = user2.name;
   }
})

users.forEach((e) => {
   console.log(`e.name: ${e.name}`)
})

let getAddResult = () => {
   let sum = 10;
   console.log("sum:"+sum);
   return sum; //
};


function App() {

   return <div>
      합계 : {getAddResult} //getAddResult의 참조를 입력
      합계 : {getAddResult()} //getAddResult의 함수를 실행
      </div>
}

export default App;
