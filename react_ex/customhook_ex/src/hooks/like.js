import { useState } from "react";

export let useLike = () => {
   let [like, setLike] = useState(0);

  let upLike = () => {
    setLike(like + 1);
  }

  return [like, upLike];
}