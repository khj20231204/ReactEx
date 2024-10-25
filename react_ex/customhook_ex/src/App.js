import logo from './logo.svg';
import './App.css';
import { myhooks } from './hooks/MyHooks';

function App() {

  //let [hart2, takeHart] = MyHart(); //MyHart는 함수기 때문에 ()가 붙는다, 리턴을 배열로 했기 때문에 구조분해할당도 배열로 한다

  let [hart, myhooksFunc] = myhooks();

  return (
    <div className="App">
      <span onClick={myhooksFunc} style={{cursor:'pointer'}}>❤️{hart}</span>
    </div>
  );
}

export default App;
