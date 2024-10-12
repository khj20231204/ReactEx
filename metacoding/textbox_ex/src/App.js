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

    //객체 생성
    let obj = {
       "id" : num,
       "title" : title,
       "content" : content
    }

    setPosts([...posts, obj])
  }
  
  //배열 삭제
  let handleDelete = (e) => {
      let obj = [...posts];
      
      console.log(obj)
      
      //배열에 저장되어 있는 객체를 삭제하기 위해 인덱스로 접근
      obj = obj.filter((v , i) => { //i가 배열의 인덱스 값
            return i != e.target.value;
      })
      
      setPosts(obj)
  }

  return (
    <div>
      {/* 텍스트박스에 onChange이벤트를 걸고 값이 변할 때마다  state에 값을 저장한다 */}
      <input type="text" placeholder='제목을 입력하세요'  onChange={handleTitle}>
      </input>
      <input type="text" placeholder='내용을 입력하세요' onChange={handleContent}>
      </input>
      {/* 입력 버튼을 눌렀을 때 객체를 새로 생성하고 객체에 state값을 넣고 이 값을 setPost로 저장 */}
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
               {/* 버튼에도 value가 있다. e.target.value로 값을 가져온다 */}
                <button onClick={handleDelete} value={i}>삭제</button>
              </div>
              </StyledContent>
          )
        })}
      </div>

    </div>
  );
}

export default App;
