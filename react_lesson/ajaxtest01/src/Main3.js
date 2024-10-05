import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main3() {
   
   const [review, setReview] = useState([]);

   useEffect(() => {
      axios.get('http://172.30.1.87/sample')
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
         mno : {review.mno}<br/>
         First Name: {review.firstName}<br/>
         Last Name: {review.lastName}<br/>
      </div>
      );
}

export default Main3;

/*
@RestController
public class HomeController {

   @RequestMapping("/sample")
   public SampleVo sample() {
   
      SampleVo sv = new SampleVo();
      sv.setMno(23);
      sv.setFirstName("홍");
      sv.setLastName("길동");

      return sv;
   }
}
*/