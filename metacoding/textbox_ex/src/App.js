import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

function App() {

  let [posts, setPosts] = useState([
      {id:1, title:'aaa', content:'내용1'},
      {id:2, title:'bbb', content:'내용2'},
      {id:3, title:'ccc', content:'내용3'}
    ]); 

  let [num, setNum] = useState(4);

  let [title,setTitle] = useState('');
  let [content,setContent] = useState('');
  let [post, setPost] = useState({
    id:'',
    title:'',
    content:''
  })

    let StyledContent = styled.div`
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
      margin: 10px;
      align-items:center;
      padding: 10px;
    `
  
  let handleTitle = (e) => {
    setTitle(e.target.value);
  }
  
  let handleContent = (e) => {
    setContent(e.target.value)
  }

  let handleInput = () => {

    console.log(`num:${num}, title:${title}, content:${content}`)

    setPost({
      id:num,
      title:`${title}`,
      content:{content}
    })
    setNum(num+1);

    setPosts([...posts, post])
  }

  let handleDelete = () => {

  }

  return (
    <div>
      <input type="text" placeholder='제목을 입력하세요'  onChange={handleTitle}>
      </input>
      <input type="text" placeholder='내용을 입력하세요' value={content} onChange={handleContent}>
      </input>
      <button onClick={handleInput}>입력</button>
      <div>
        {posts.map((v,i) => {
            return (
              <StyledContent>
              <div>
                <h4>제목:{v.title}</h4>
                <h4>내용:{v.content}</h4>
              </div>
              <div>
                <button onClick={handleDelete}>삭제</button>
              </div>
              </StyledContent>
          )
        })}
      </div>

    </div>
  );
}

export default App;
