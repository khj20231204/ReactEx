import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
      <BrowserRouter>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/NotFound">NotFound</Link><br/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/NotFound" element={<NotFound/>} />
          </Routes>  
      </BrowserRouter>
  );
}

export default App;
