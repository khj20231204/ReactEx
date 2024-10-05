import React from 'react';
import styled from 'styled-components'

//하나의 컴포넌트를 생성(재사용)

const StyledUL = styled.ul`
   list-style-type: none;
`
const StyledLi = styled.li`
   font-size: 15px;
   font-weight: bold;
`
const StyledDivOutLine = styled.div`
   border : 1px solid black;
   padding: 5px;
`

const Footer = () => {
   return (
      <StyledDivOutLine>
         <StyledUL>
            <StyledLi>오시는길 : 서울 강남구 ..</StyledLi>
            <StyledLi>전화번호 : 000-00000</StyledLi>
         </StyledUL>
      </StyledDivOutLine>
   );
};

export default Footer;