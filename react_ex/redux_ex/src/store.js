import { configureStore, createSlice } from '@reduxjs/toolkit';

   let user = createSlice({
      name : 'state',
      initialState : '값',

      reducers : {
         changeName(state) { //위에 값을 수정할 함수
            return 'state2';
         }

      }
   })

   export let {changeName} = user.actions;

   let stock = createSlice({
      name : 'stock',
      initialState : 
      [
         {id : 0, name : 'White and Black', count : 2},
         {id : 2, name : 'Grey Yordan', count : 1}
       ]
   })

export default configureStore({
   reducer : {
      user : user.reducer,
      stock : stock.reducer
   }
})