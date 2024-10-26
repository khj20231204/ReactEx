import React from 'react';
import ContextMaker from './ContextMaker';
import { useContext } from 'react';

const AA = () => {
   //useContext의 괄호안에는 Context가 들어간다
   let {a,b} = useContext(ContextMaker);

   return (
      <div>
         <h2>AA</h2>
         {a}
         <div onClick={() => {
            b('change A')
         }}>클릭!</div>
      </div>
   );
};

export default AA;