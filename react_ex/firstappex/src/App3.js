
function App3(){

   let a = 34;

   return(
      <div>
         { a === 34 ? <h1>a는 34</h1> : <h1 style={{color:'red'}}>a는 34가 아니다</h1> }
         { a === 34 && <h1>a는 34</h1> }
         </div>
   );
}

export default App3;