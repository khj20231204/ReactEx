import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {

   let [list, setList] = useState([]);
   let [data ,setData] = useState({});

   
   useEffect(() => {
      axios.get('http://localhost/hello/sample').then((r) => {
         //console.log(r)
         console.log(typeof(r.data))
         console.log(r.data)
         setData(r.data)
         setList(r.data)
      })

      axios.get('http://localhost/hello/list').then((r) => {
         //console.log(r)
         //setList(r);
      })
      
   },[])


  return (
    <div className="App">
      {console.log(JSON.stringify(data))}
    </div>
  );
}

export default App;
