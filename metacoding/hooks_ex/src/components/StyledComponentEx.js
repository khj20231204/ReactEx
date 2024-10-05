import '../App.css'
import styled from 'styled-components'
import { Title } from '../MyCss'

const inlineStyle = {
   color : 'white',
   backgroundColor : 'blue'
}

const StyledLoginDiv = styled.table`
   padding : 30px 0 03px 0;
   color : red;
`

let T = document.createElement('h1');
T.style.color = 'red';
/* T.style = {
   fontSize : '1.5em',
   textAlign : 'center',
   color :  'red'
} */

/* h1이라는 가상의 element를 만듬
자바스크립트로 디자인을 바로 적용
컴포넌트 개념이기 때문에 가장 앞에 Title의 T는 대문자

외부 모듈로 스타일을 적용하기 위해서 css파일을 따로 뺀 경우는 재사용에 유리
*/
/*
const Title = styled.h1` 
   font-size : 1.5em;
   text-align : center;
   color : palevioletred;
`*/

const StyleComponentEx = () => {

   return (
      
      <div style={{textAlign:'center'}}>
         <Title>styled.h1</Title>
{/* <Title> => 변경 <h1 class="sc-ovuCP gzLOmN">styled.h1</h1> */}
      </div>
   );
}

export default StyleComponentEx;

{/* <div style={{color:'red',fontWeight:'bold',fontSize:'14px'}}>inline mode</div>
<div style={style1}>CSS module</div>
<div className="outer">outer file</div> */}