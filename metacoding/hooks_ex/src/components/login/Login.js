import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
   padding: 3px;
   height: 500px;
`

const Login = () => {
   return (
      <LoginBox>
         <h1>로그인 페이지 입니다.</h1>
      </LoginBox>
   );
};

export default Login;