import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Navigaton from './components/Navigaton';
import SinglePage from './pages/SinglePage';
import { useEffect, useState } from 'react';


function App() {

   let [data, setData] = useState('');

   let list = [
      {id:1, name:'꺽정'},
      {id:2, name:'길동'},
      {id:3, name:'혁수'},
   ]

   useEffect(() => {
      setData(list);
   },[])
   
  
  return (
   <>
   <SinglePage/>
   {/* 
   <Navigaton/>
   <br></br>
   <Routes>
      <Route path="/" element={<ListPage data={data}/>} />
      <Route path="/write" element={<WritePage data={data} setData={setData}/>} />
   </Routes> */}
   </>
  );
}

export default App;
