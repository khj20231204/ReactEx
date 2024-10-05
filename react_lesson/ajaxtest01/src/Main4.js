import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main4() {
   
   const [review, setReview] = useState([]);

   useEffect(() => {
      axios.get('http://172.30.1.87/list')
         .then((response) => {
         console.log(response);
         console.log(response.data);
         setReview(response.data);
      })
      .catch((error) => {
         console.error('Error fetching data: ', error);
      });
   }, [] ); 

   return (
      <div>
         <h1>react ajax 연습</h1>
         { review.map((item, index) => (
            <div key={index}>
            <h3>mno: {item.mno}</h3>
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            </div>
         ))}
      </div>
      );
}

export default Main4;

/*
@RequestMapping("/list")
public List<SampleVo> list() {
   List<SampleVo> list = new ArrayList<SampleVo>();
      for (int i = 1; i <= 10; i++) {
      
         SampleVo sv = new SampleVo();
         sv.setMno(i);
         sv.setFirstName("홍");
         sv.setLastName("길동" + i);
         list.add(sv);
      }
   return list;
}
*/