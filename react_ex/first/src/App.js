import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

   let [count, setCount] = useState(0);
   let [age, setAge] = useState(20);

   let handleEvent = () => {
      setCount(count+1)
      if(count < 3){
         setAge(age+1);
      }


      console.log("count:"+count);
   }

   useEffect(() => {
      // setCount(count+1)
      if(count != 0){
         if(count < 3){
            setAge(age+1);
         }
      }
   },[count])

   return (
      <div>
         <div>안녕하십니까. 전 {age}임</div>
         <button onClick={handleEvent}>handleevent 한살 업</button>
         <button onClick={()=>{
             setCount(count+1)
            /*  if(count < 3){
                setAge(age+1);
             } */
             console.log("direct count:"+count)
         }}>direct 한살 업</button>
      </div>
   );
}

export default App;
