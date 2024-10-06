
import {useState}  from 'react';

const Titlechange = () => {
 
   let post = '강남 우동 맛집';
   let [logo, setLogo] = useState('ReactBlog');
   let [글제목1,setTitle1] = useState('남자 코트 추천');
   let [글제목2,setTitle2] = useState('강남 우동 맛집');
   let [글제목3,setTitle3] = useState('파이썬 독학');
 
   let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
 
   let [따봉, 따봉변경] = useState(0);
 
   return (
     <div className="App">
       <div class="black-nav">
         <h2 style={{color:'red', fontSize:'16px'}}>{logo}</h2>
       </div>
 
       <button onClick={()=>{
          글제목[2] = '여자 코트 추천';
          글제목변경(글제목);
          //글제목변경(['남트 추천','강남 맛집','파 독학'])
        }}>글자 변경</button>
 
       <div className='list'>
 
         <h4>{글제목[1]} <span onClick={() => {
           따봉변경(따봉 + 1)
         }}>👍</span> {따봉} </h4>
         <p>2월 17일 발행</p>
 
       </div>
 
       <div className='list'>
         <h4>{글제목[1]}</h4>
         <p>2월 17일 발행</p>
       </div>
       <div className='list'>
         <h4>{글제목[2]}</h4>
         <p>2월 17일 발행</p>
       </div>
     </div>
   );
};

export default Titlechange;