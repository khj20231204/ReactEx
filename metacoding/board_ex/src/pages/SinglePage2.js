import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const SinglePage2 = () => {

   let [title, setTitle] = useState('');

   let [no, setNo] = useState(6);

   const [post, setPost] = useState({
      id: no,
      title: "",
      content: ""
   })

   let [list, setList] = useState([]);

   let listData = [
      {id:1, title:'제목1', content:'내용1'},
      {id:2, title:'제목2', content:'내용1'},
      {id:3, title:'제목3', content:'내용1'},
      {id:4, title:'제목4', content:'내용1'},
      {id:5, title:'제목5', content:'내용1'},
      {id:6, title:'제목6', content:'내용1'},
   ]

   useEffect(() => {
      setList(listData);
   },[])

   let handleSubmitButton = () =>{
      console.log("post:"+post);

      setList([...list, post])
      list.map((v,i)=>{
         console.log(v)
      })
   }

   let handleChangeTitle = (e) => {
      
      setPost({title:e.target.value})
      console.log("post.title:"+post.title)
   }

   let handleChangeContent = (e) => {
      setPost({content:e.target.value})
   }

   let handleForm = (e) => {
      /*
      //computed property names 문법(키값 동적할당)
      키 값에 변수를 할당하고 [ ]로 감싸면 객체 이름이 된다.
      객체 이름의 동적할당 :
      setPost({[이름변수할당]: 값변수할당   })   */
      console.log("e.target.name:"+e.target.name+" ,e.target.value:"+e.target.value)
      setNo(no+1);
      setPost({...post, no:{no}, [e.target.name]: e.target.value}) //...post
   }

   let StyledListDiv = styled.div`
      width: 100%;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
      padding: 10px;
      display: flex; //정렬하기 위해서 설정
      justify-content: space-between; //글자와 버튼을 양옆으로 찟는다
      align-items: center; //세로 가운데 정렬
   `

   return (
      <div>
          {/* value={post.title}를 하면 value값에 post의 state값에 값이 저장돼야 하는데 setPost가 아니기 때문에 강제로 값을 입력할 수 없다 */}
          1)value로 state 상태 값을 입력
          2)onChange이벤트를 단다
          <input type="text" size='14' value={post.title} name="title" placeholder='제목을 입력하세요' onChange={handleForm}></input>&nbsp;&nbsp;
          <input type="text" size='14' value={post.content} name="content" placeholder='내용을 입력하세요' onChange={handleForm}></input>&nbsp;&nbsp;
          <button type="button" onClick={handleSubmitButton}>보내기</button>

         <hr/>
      {list.map((v,i) => {
        return( <StyledListDiv>{v.id}. {v.title} <button style={{width:150, height:50}}>삭제</button></StyledListDiv>)
      })}
   </div>         
   );
};

export default SinglePage2;