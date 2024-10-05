import React, {useState} from 'react'

const Form01 = (props) => {

   const [value, setValue] = useState('');

   const handleChange = (e) => {
      setValue(e.target.value);
      //setValue(e.target.value.toUpperCase());
   };

   const handleSubmit = (e) => {
      alert("입력한 이름 : "+value);
      e.preventDefault();
      //새로 고침이 되면 text에 목록이 없어진다
      //새로 고침이 안되면 text에 목록이 그대로다
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
           이름 : <input type='text' value={value} onChange={handleChange}/>
         </label>
         <button type="submit">제출</button><br/>
         이름 : {value}
      </form>
   );
}

export default Form01;