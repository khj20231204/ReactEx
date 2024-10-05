import logo from './logo.svg';
import './App.css';
import Main1 from './Main1.js';
import Main2 from './Main2.js';

function App() {

  const arr_one = ['abc','def','ghe'];
  const arr_two = [['egg',3],['rehh',34],['rreh',15]];
  const obj = [{name:'sdf',age:23},{name:'geg',age:34},{name:'egz',age:38}];

  const return_arrone = arr_one.map((v) => {
      <div>-----</div>
      return <Main1 vvv={v} />
  })

  const return_arrtwo = arr_two.map((v) => (
    <Main2 aa={v[0]} bb={v[1]} />
  ))

  const return_obj = obj.map((v) => (
    <Main2 aa={v.name} bb={v.age} />
  ))

  let arrayFiler = arr_two.filter(v => v[1] > 20)
  arrayFiler = arrayFiler.map((v) => {
    return <Main2 aa={v[0]} bb={v[1]} />
  })

  return (
    <div>
      {return_arrone}
      {return_arrtwo}
      {return_obj}
      {arrayFiler}
    </div>
  )
}

export default App;
