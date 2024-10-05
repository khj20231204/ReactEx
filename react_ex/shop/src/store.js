import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';
import customerData from './store/customerData.js';

/*
   디스트럭쳐링= >
   변수 changeName과 changeName2에 user.actions의 값을 각각 넣는다
*/ 

let stock = createSlice({
   name : 'user2',
   initialState : [10,11,12]
})

export default configureStore({
  reducer: { 
   user :  user.reducer,
   stock : stock.reducer,
   customerData : customerData.reducer
  }
}) 

