import React, { useContext } from 'react';
import ContextMaker from './ContextMaker';

const BB = () => {

   let {a,b} = useContext(ContextMaker)

   return (
      <div>
         <h2>BB</h2>
         a : {a}
      </div>
   );
};

export default BB;