// MyProvider.js

import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Hello Context~!');

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {console.log({children})}
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;