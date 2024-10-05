import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/product/*" element={<Product/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
