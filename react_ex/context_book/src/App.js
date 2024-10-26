import './App.css';
import RenderPropsSample from './RenderPropsSample';
import ColorBox from './ColorBox';
import color from './Color';

function App() {
  return (
    <div className="App">
      <color.Provider value={{color:'red'}}>
        <colorB></colorB>
      </color.Provider>
    </div>
  );
}

export default App;
