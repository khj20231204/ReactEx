import logo from './logo.svg';
import './App.css';
import Say from './say';
import Color from './Color';
import { useState } from 'react';

function App() {

   let [name, setName] = useState('')

   let a = new Array(1000).fill(0);
   return (
      <>
         <Color />

         <input type='text' onChange={(e)=>{
            setName(e.target.value)
         }}/>
         
         {a.map((e,i)=>{
            console.log("여기는 a.map 안");
            return (
               <div key={i}>{name}</div>
            )
         })}
         
      </>
   );
}

export default App;
