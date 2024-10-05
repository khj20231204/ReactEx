import React from "react";
import Book from "./Book";
//import Book from "./Book";

const Library = () => {

   return (
      <div>
         <Book name="처음 만난 파이썬" num={300}></Book>
         <Book name="처음 만난 AWS" num={400}></Book>
         <Book name="처음 만난 리액트" num={200}></Book>
      </div>
   )
}

export default Library;