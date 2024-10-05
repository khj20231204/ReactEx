import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Test from './Test';

function App() {
  return (
    <BrowserRouter>
      <h1>hi react</h1>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to='test'>테스트</Link></li>
      </ul><hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
