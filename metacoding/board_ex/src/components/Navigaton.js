import React from 'react';
import { Link } from 'react-router-dom';
/* import {styled} from 'styled-components' */
import styled from 'styled-components'

let StyledLink = styled(Link)`
   color : red;
   padding: 20px;
   margin-top: 10px;
`

const Navigaton = () => {
   return (
      <div>
         <StyledLink to="/">글목록</StyledLink>
         <StyledLink to="/write">글쓰기</StyledLink>
      </div>
   );
};

export default Navigaton;