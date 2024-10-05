//props
//1.props는 부모 컨포넌트에서 자식 컴포넌드에 데이터를 전달할 때 사용
//2.props를 전달 받은 자식 컴포넌트에서 데이터 
import React from "react";

const Book = (props) => {

   return (
      <div>
         <h1>이 책의 이름은{props.name} 이다.</h1>
         <h2>이 책은 총 {props.num} 패이지이다.</h2><br/>
      </div>
   )
}

export default Book;