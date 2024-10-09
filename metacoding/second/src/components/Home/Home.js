import React from 'react';

const Home = (props) => {

   //let {board, setBoard} = props;
   console.log({props})
   console.log(props)

   return (
      <div style={{height:400,border:'1px solid black'}}>
         <h1>Home</h1>

         {/* {props.board.map((i) => {
            return (<div>{i.name}</div>)
         })} */}
      </div>
   );
};

export default Home;