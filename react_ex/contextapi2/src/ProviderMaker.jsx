import React, { useState } from 'react';
import ContextMaker from './ContextMaker';

//중괄호 = 자바스크립트로 사용하기 위해서 사용
//children 매개변수명 바뀌면 안됨
const ProviderMaker = ({children}) => {

   let [a,b] = useState('basic A');

   return (
      <div>
         {/* {{a,b}} : 자바스크립트기 때문에 {} 한번, 객체를 전달하기 위해서 { } 한번 더 */}
         <ContextMaker.Provider value={{a,b}}>
            {children} {/* children 이름 바뀌면 안됨, 자식 컴포넌트를 위미 */}
         </ContextMaker.Provider>
      </div>
   );
};

export default ProviderMaker;