import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux"
import { changeName, increaseAge } from '../store/userSlice';
import { changeCount } from '../store/customerData';

function Cart(){

   //Redux store 가져와줌
   let temp = useSelector((state) => {return state}) 
   //state는 redux안에 모든 state를 의미
   
   //특정 state만 가져오기 위해서는 state.변수명
   let temp2 = useSelector((state) => {return state.user})
   //user만 가져옴

   let temp3 = useSelector((state) => {return state.customerData})

   /*store.js에 요청을 보내는 함수*/
   let dispatch = useDispatch()

   return(
      <div>

         <h3>{temp.user.name}의 장바구니</h3>
         나이는 : {temp.user.age}
         {console.log(temp.customerData.length)}
         <Table striped>
            <thead>
            <tr>
               <th>id</th>
               <th>name</th>
               <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
               {temp.customerData.map((e,i)=>{
                  return(
                  <tr key={i}>
                     <td>{e.id}</td>
                     <td>{e.name}</td>
                     <td>{e.count}</td>
                     <td>
                        <button onClick={() => {
                           dispatch(changeName());
                           dispatch(increaseAge());
                           dispatch(changeCount(e.id));
                        }}>+</button>
                     </td>
                  </tr>
                  )
               })}
            </tbody>
         </Table>
      </div>
   )
}

export default Cart;