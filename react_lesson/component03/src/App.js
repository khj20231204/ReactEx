import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {

  const mainProps = {
    name : '홍',
    location : '서울시',
    color : 'blue',
    list : ['빵','치킨','돈까스']
  }

  return (
    <div>
      <Header></Header>
      {/* <Main {...mainProps}></Main> */}
      <Main {...mainProps} ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
