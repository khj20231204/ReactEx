import React from 'react';

//함수의 매개변수로 바로 값 전달하기
const MyComponent5 = ({name, children, num}) => {
   return (
      <div>
         <h1>안녕!</h1><br/>
         <h2>나의 이름은 {name}이다.</h2><br/>
         <h3>나의 children은 {children}이다.</h3><br/>
         <h4>내가 좋아하는 숫자는 {num}이다.</h4><br/>
      </div>
   );
}

export default MyComponent5;