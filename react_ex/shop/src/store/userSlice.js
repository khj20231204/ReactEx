import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ //useState 비슷한 용도
   /*
   name : 'state이름',
   initialState : '값'*/
   name : 'user',
   initialState : {name : 'kim', age : 20}, //S는 대문자, 변수명.user로 kim을 가져온다
   reducers : {
      //state를 수정하는 함수 만들기
      changeName(state){
         //return 'join, ' + state.name;
         //return {name : 'park', age : 20}
         state.name = 'park';
         //immer.js의 도움으로 복사본을 만들어서 리턴하기 때문에 arry와 객체는 직접 변경이 가능
      },
      increaseAge(state){
         state.age += 1;
      }
   }
})

export let {changeName, increaseAge} = user.actions //user변수의 함수 changeName, changeName2가 남음

export default user