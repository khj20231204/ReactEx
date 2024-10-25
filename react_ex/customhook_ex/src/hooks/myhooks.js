import { useState } from "react";

export let myhooks = () => {

      let [hart, setHart] = useState
      
      let myhooksFunc = () => {
            setHart(hart+1);
      }

      return [hart, myhooksFunc];
}