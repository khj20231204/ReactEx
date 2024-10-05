import axios from 'axios';
import {useState} from 'react';
import './App.css';

const Main1 = () => {
   return (
      <div className='App'>
         <h1>react ajax연습</h1>

         <button onClick={() => {
            axios.get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                     console.log('success')
                     console.log(result)
                     console.log(result.data) //result.data를 선택하면 Array값을 가져옴
                     console.log(result.config) //result.data를 선택하면 Array값을 가져옴
                     console.log(result.data[1].title) //result.data를 선택하면 Array값을 가져옴
                     console.log(result.headers) //result.data를 선택하면 Array값을 가져옴
                     alert('ok');
                  })
                  .catch(() => {
                     console.log('fail');
                  })
         }}>
            요청
         </button>
      </div>
   )
};

export default Main1;