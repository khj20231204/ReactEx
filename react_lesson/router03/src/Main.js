import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
   return(
      <div>
         <h3>안녕하세요. 메인 페이지입니다.</h3>
         <ul>
            <Link to="/product/1?search=productName&q=demo"><li>1번 상품</li></Link>
            <Link to="/product/2"><li>2번 상품</li></Link>
            <Link to="/test"><li>test</li></Link>
         </ul>
      </div>
   )
};

export default Main;
