import {Link} from 'react-router-dom'

const Main = () => {

   return (
      <div className='App'>
         <Link to="Product/1">Product1로</Link><br/>
         <Link to="product/2">Product2로</Link>
      </div>
   )
};

export default Main;