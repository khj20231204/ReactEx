import React, { createContext, useState } from 'react';
import MyContext from './MyContext';
import TestA from './TestA';

export let MyContext2 = createContext()

const MyProvider = ({children}) => {

   let [myState, setMyState] = useState("myState");


   return (
      <div>
         <h2>My provider home</h2>
         <MyContext2.Provider value={{myState}}>
            <TestA />
         </MyContext2.Provider>
      </div>
   );
};

export default MyProvider;