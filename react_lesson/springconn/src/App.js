import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";  
import React from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/showMe")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
       <ul>{data.map((v,idx) => <li key={'${dix}-${v}'}/>)}</ul>
      </header>
    </div>
  );
}

export default App;
