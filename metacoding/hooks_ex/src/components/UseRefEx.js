import { createRef, useEffect, useRef } from "react";

const UserRefEx = () => {

   let myRef = useRef();
   let div1 = useRef();
   let div2 = useRef();
   let div3 = useRef();

   useEffect(() =>{
      myRef.current.focus();
   },[])

   let getDivName = (e) => {
      console.log(div1.current.name);
   }

   let array = Array.from({length:5}).fill(5);

   console.log(array)
   return(
      <>
         <input ref={myRef}></input>
         <div ref={div1} onClick={getDivName} name="div1">div1</div>
         <div ref={div2} onClick={getDivName} name="div2">div2</div>
         <div ref={div3} onClick={getDivName} name="div3">div3</div>
      </>
   );
}

export default UserRefEx;