import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import Footer from './Footer';
import NotFound from './NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Test from './Test';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header /><hr/>
        <Routes>
          {/* 슬래시(/)로 요청하면 Main.js 컴포넌트를 실행 */}
          <Route path='/' element={<Main/>} />

          {/* /product/1로 요청하면 Product.js 컴포넌트를 실행 */}
          <Route path='/product/:productId' element={<Product/>} />
          {/* productId는 변수 */}

          {/* 일치하는 경로가 없는 경우 NotFound.js 컴포넌트를 실행 */}
          <Route path="*" element={<NotFound />} />

          <Route path="/test" element={<Test/>} />
        </Routes><hr/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
