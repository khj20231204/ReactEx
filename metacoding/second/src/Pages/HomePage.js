import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home/Home';
import Footer from '../components/Footer';
import {useState, useEffect} from 'react'

const HomePage = () => {

   let [board, setBoard] = useState([]);

   useEffect(() => {
      let data = [
         {id:1, name:'길동'},
         {id:2, name:'동자'},
         {id:3, name:'자자'},
      ]

      setBoard([...data]);
   },[])

   return (
      <div>
         <Header />
         <Home board={board} setBoard={setBoard}/>
         <Footer />
      </div>
   );
};

export default HomePage;