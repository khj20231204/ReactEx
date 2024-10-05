import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Item = () => {
   const [review, setReview] = useState([]);

   useEffect(() => {
      //axios.get('http://localhost:3000/item.json')
      axios.get('item.json')
            .then((result) => {
               console.log(result)
               setReview(result.data)
            }).catch((err) => {
               console.log(err);
            })
   }, [])

   return(
      <div>
         <h1>react ajax연습</h1>

         { review.map((item, index)=>(
            <div key={index}>
                  <h3>id : {item.id}</h3>   
                  <p>title : {item.title}</p>   
                  <p>content : {item.content}</p>   
                  <p>price : {item.price}</p>   
            </div>
         )) }
         
      </div>
  );
}

export default Item;