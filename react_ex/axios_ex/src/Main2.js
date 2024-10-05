import axios from 'axios'
import {useState, useEffect} from 'react'

const Main2 = () => {

   const [result, setResult] = useState([]);

   useEffect(() => {
      axios.get("https://codingapple1.github.io/shop/data2.json")
            .then((v) => {
               setResult(v.data);
            })
            .catch((e) => {
               alert(e);
            })
   },[]);

   return(
      <div>
         { result.map((v,i)=>(
            <div key={i}>
               <ul>
                  <li>id:{v.id}</li>
                  <li>title:{v.title}</li>
                  <li>content:{v.content}</li>
               </ul>
            </div>
            ))}
      </div>
   )
}

export default Main2;