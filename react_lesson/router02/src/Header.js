import React from 'react'
import {Link} from 'react-router-dom'
//'react-router-dom'에서 Link태그를 사용하겠다

const Header = (props) => {
   return (
      <div>
         <Link to="/">
         <h1>헤드입니다(Header.js)</h1>
         </Link>
      </div>
   );
}

export default Header;
