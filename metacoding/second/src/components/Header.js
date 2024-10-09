import React from 'react';
import styled from 'styled-components'

const Header = () => {
 
   let StyledContainerDiv = styled.div`
   height: 100px;
   border: 1px solid gray;
`

   let StyledUl = styled.ul`
      list-style-type: none;
      display: inline-block;
   `

   let StyledLi = styled.li`
   display: inline-block;
`

   return (
      <StyledContainerDiv>
         <StyledUl>
            <StyledLi>메뉴 1</StyledLi>
            <StyledLi>메뉴 2</StyledLi>
         </StyledUl>         
      </StyledContainerDiv>
   );
};
        
export default Header;