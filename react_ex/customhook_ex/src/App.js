import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useLike } from './hooks/like';

function App() {

  let [like, upLike] = useLike();

  axios.get('/username.json');

  return (
    <div className="App">
      <div onClick={upLike} style={{cursor:'pointer'}}>❤️{like}</div> 
    </div>
  );
}

export default App;
