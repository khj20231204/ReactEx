import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Main from './component/Main';
import Header from './component/Header';

function App() {
  const mainProps = {
    name : '홍',
    location : '서울시',
    favoriteList : ['파스타','빵','떡뽁이']
  }
  
  return (
    <div className='App'>
      <Header />
      <Main name='홍' color='blue'></Main>
      <Footer />
    </div>
  );
}

export default App;
