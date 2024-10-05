import { createRef, useEffect, useRef } from "react";

const UserRefEx = () => {


   let myRef = useRef();

   useEffect(() =>{
      myRef.current.focus();
   },[])

   return(
      <>
         <input ref={myRef}></input>
      </>
   );
}

export default UserRefEx;