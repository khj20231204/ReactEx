import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const PostWritePage = (props) => {

   const navigate = useNavigate();
   
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const insert = () => {
      alert('insert함수');

      axios.post("http://localhost/write",{
         'title' : title,
         'content' : content
      }).then((res)=>{
         console.log(res);
      }).catch((e)=> {
         console.log(e)
      })
      navigate('/');
   }

   return (
      <div>
         <input value={title} onChange={(e)=>{setTitle(e.target.value)}} />
         <area cols={200} rows={100} value={content} onchange={(e)=>{setContent(e.target.value)}}></area>
         <button onClick={insert}>전송하기</button>
      </div>
   )
}

export default PostWritePage;