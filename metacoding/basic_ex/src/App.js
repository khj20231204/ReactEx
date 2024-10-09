import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Test2 from '../../hooks_ex/src/components/Test';
import { Test } from '../../hooks_ex/src/components/Test';
import { num } from '../../hooks_ex/src/components/Test';

function App() {
  console.log("app 앱실행");

  let sample = [
    {id:1, name:"A"},
    {id:2, name:"B"},
    {id:3, name:"C"},
    {id:4, name:"D"},
  ];

  let [users, setUsers] = useState(sample)
  console.log("user:"+users);

  let download = () => {
    let sample2 = sample.concat({id:7, name:'kk'})
    setUsers(sample2)
  }

  return (
      
    <div className="App">
      <button onClick={download}>download</button>
      {users.map((v)=> {
       return(<h1>{v.name}</h1>)
      })}
    </div>
  );
}

export default App;
