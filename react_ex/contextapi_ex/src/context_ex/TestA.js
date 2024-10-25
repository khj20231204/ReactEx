import React, { useContext } from 'react';
import TestB from './TestB';
import { MyContext2 } from './MyProvider';

const TestA = () => {

   let {myState} = useContext(MyContext2)

   return (
      <div>
         {myState}
        {/*  <TestB></TestB> */}
      </div>
   );
};

export default TestA;