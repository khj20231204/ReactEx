
import React from 'react'

const MyComponent4 = (props) => {
   const {name, children} = props;

   return (
      <div>
         <h1>안녕하세요</h1>
         <h2>네 이름은 {name}이다</h2>
         <h3>children 이름은 {children}이다</h3>
      </div>
   );
}

export default MyComponent4;