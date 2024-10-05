import { useState } from 'react';
import Main2 from './components/Main2';
import data from './data';
import './App.css';

function App3(){

   let [shoes] = useState(data);

   return(
      <>
         <Main2 shoes={shoes}/>
      </>
   )
}

export default App3;