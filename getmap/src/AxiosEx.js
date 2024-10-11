import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'

const AxiosEx = () => {

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
      <div>
            {console.log(JSON.stringify(data))}
      </div>
   );
};

export default AxiosEx;