import logo from './logo.svg';
import './App.css';
import ACompo from './childcomponents/ACompo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BCompo from './childcomponents/BCompo';
import CCompo from './childcomponents/CCompo';


function App() {
  return (
   <BrowserRouter>
      <Routes>
         <Route path="/" exact={true} element={<ACompo/>}></Route>
         <Route path="/b" exact={true} element={<BCompo/>}></Route>
         <Route path="/c" exact={true} element={<CCompo/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
