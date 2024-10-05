import { configureStore, createSlice } from '@reduxjs/toolkit'

let customerData = createSlice({
   name : 'customerData',
   initialState : 
   [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      changeCount(state,action){
         //state는
         //(state[action.payload].id === action.payload) ? state[action.payload].count += 1 : 
         //console.log("state:"+state[action.payload].count+" ,i:"+action.payload+ " ,{i}:"+{action});
   
         //let num = state.findIndex((e)=> {return e.id === action.payload})
         let num = state.findIndex((e)=>  e.id === action.payload)
         //e는 state의 하나하나 데이터 , index를 반한
         //findIndex : arry 에서 원하는 거 몇번째 있나 찾아주는 함수

         state[num].count += 1;
      },
      addItem(state, action){
         //state.push({id:1, name:'Red Knit', count:1})
         state.push(action.payload)
      }
    }
})

export let {changeCount, addItem} = customerData.actions //user변수의 함수 changeName, changeName2가 남음
/* 함수를 export한 것은 Cart.js에서 사용 */

export default customerData
/* customerData를 export한 것은 store.js에서 사용 */