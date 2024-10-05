import {Component} from 'react';
import React from 'react';

class Counter extends Component{
   constructor(props){
      super(props);

      this.state = {
         number : 0,
         num : 100
      }
   };

   render(){
      const {number} = this.state;
      const {num} = this.state;

      return (
         <div>
            <h1>{number}</h1><br/>
            <h1>{num}</h1>
            <button onClick={() => {this.setState({number : number+1})}}>+1</button>
            <button onClick={() => {this.setState({num : num+10})}}>+10</button>
            <button onClick={() => {
               this.setState((preState)=>{
                  return {
                     number : preState.number + 1
                  };
               })

               this.setState((preState) => {
                  return{
                     number : preState.number + 1
                  }
               })
            }}>더블 업</button>
            <button onClick={() => {
               this.setState(
                  { number : number + 1},
                  () => {
                     console.log("방금 state가 호출");
                     console.log(this.state);
                  }
               )
            }}>특정 작업</button>
         </div>
      );
   }
}

export default Counter;