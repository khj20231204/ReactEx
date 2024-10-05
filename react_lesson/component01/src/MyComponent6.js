import React from "react";

const MyComponent6 = (props) => {
   const {name, children, num} = props;

   return (
      <div>
         <h1>안녕!</h1><br/>
         <h2>나의 이름은 {name}이다.</h2><br/>
         <h3>나의 children은 {children}이다.</h3><br/>
         <h4>내가 좋아하는 숫자는 {num}이다.</h4><br/>
      </div>
   );

}

export default MyComponent6;