import React, {useState} from "react";

const Reservation = (props) => {
   const [kind, setKind] = useState('');
   const [breakfast, setBreakfast] = useState(false);
   const [number, setNumber] = useState(2);
   const [showLabel, setShowlabel] = useState(false);

   const handleSubmit = (e) => {
      alert('아침 식사 여부:' + breakfast + ' ,방문객 수:' + number);
      e.preventDefault(); //새로 고침 방지
   }

   const onChangeKind = (e) => {
      setKind(e.target.value);
   }

   const toggleLabel = () => {
      setShowlabel(!showLabel);
   }

   return(
      <form onSubmit={handleSubmit}>
         <label>
            아침식사 여부 : <input type='checkbox' checked={breakfast} onChange={(e)=>{
               setBreakfast(e.target.checked);
                  if(e.target.checked){
                     toggleLabel();
                  }else{
                     toggleLabel();
                  }
               }} />
         </label><br/>
         {showLabel && <label>아침식사 종류 : <input type='text' onChange={onChangeKind}></input></label>}
         <br/>
         <label>
            방문객 수 : <input type='number' value={number} min="0" max="10" onChange={(e) => {setNumber(e.target.value)}} />
         </label>
         <button type='submit'>제출</button>
      </form>
   )
}

export default Reservation