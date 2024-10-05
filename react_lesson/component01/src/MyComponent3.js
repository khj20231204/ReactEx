
import React from 'react';

const MyComponent3 = (props) => {

   return (
      <div>
         <h1>안녕하세요</h1>
         <h3>내이름은 {props.name}이다</h3> <br/> {/* react 출력 */}
            children 값은 {props.children} 이다.   {/* 리액트 출력 */}
      </div>
   );
}

export default MyComponent3;