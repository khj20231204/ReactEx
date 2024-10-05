import axios from 'axios';

const Main1 = () => {

   return (
      <div className='App'>
         <h1>react ajax연습</h1>

         <button onClick={() => {
            axios.get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                     console.log(result);
                  })
         }}>전송</button>

      </div>
   )
};

export default Main1;