import {Link} from 'react-router-dom';

const Main = () => {

   return (
      <ul>
      <Link to='/product/1'><li>1번 상품</li></Link>
      <Link to='/product/2'><li>2번 상품</li></Link>
      <Link to='/test'><li>test</li></Link>
      </ul>
   )
}

export default Main;