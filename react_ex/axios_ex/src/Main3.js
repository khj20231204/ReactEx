import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main3 = () => {

   const [review, setReview] = useState([]);

   useEffect(() => {

      axios.get("localhost:")
         .then((result) => {
            setReview(result.data);
         }).catch(() => {
            alert(error)
         })
   })

   return (
      <div>
        { review.map((v,i)=>{
         return(
            <div key={i}>
               <ul>
                  <li>{v.name}</li>
               </ul>
            </div>
         )
        })}
      </div>
   )
}