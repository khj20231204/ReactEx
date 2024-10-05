import React, {useState} from 'react'

const TextArea01 = () => {

   const [value, setValue] = useState('');

   const onChangeValue = (e) => {
      setValue(e.target.value);
   }

   const onSubmit = (e) => {
      alert("입력한 요청사항 : " + value);
      e.preventDefault();
   }

   return(
      <form onSubmit={onSubmit}>
         <div>
            <textarea rows='20' cols='30' value={value} onChange={onChangeValue}></textarea>
         </div>
         <button type="submit">전송</button>
      </form>
   );
}

export default TextArea01;