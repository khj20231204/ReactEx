import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';
import MyProvider from './context_ex/MyProvider';

{/*
1)App에 있는 state를 공유하겠다
2)context선언
3)선언한 context로 감싸기
*/}

export let Context1 = createContext() //context 객체 생성, state보관함

function App() {

  let [stock] = useState([10,11,12]);
  let [shoes] = useState('shoes');

  return (
    <div className="App">
        <h1>App.js home</h1>
        <Routes>
          <Route path="/detail" element={
            <Context1.Provider value={{ stock,shoes }}> {/* context로 둘러싼다 */}
              <Details/> {/* 여기 안의 모든 컴포넌트는 재고, shoes 사용가능 */}
            </Context1.Provider>
          }></Route>
        </Routes>

          <hr></hr>

        <MyProvider></MyProvider>

    </div>
  );
}

export default App;
