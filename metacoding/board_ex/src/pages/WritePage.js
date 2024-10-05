import React, { useEffect, useState } from 'react';

const WritePage = (props) => {

   let [title, setTitle] = useState('');

   let {data,setData} = props;
   let list2 = {id:4, name:"이순신"};

   let handleSubmitButtion = () =>{
      let list = {id:6, title:'추가 된 글'}
      setTitle(list);
   }

   let addList = () => {

      let data2 = [...data, list2];
      setData(data2);

      console.log("WritePage setData execute");
   }

   return (
      <div>
         <form>
            <button type="button" onClick={addList}>클릭</button>
            <input type="text" size='30' placeholder='내용을 입력하세요'></input>&nbsp;&nbsp;
            <button type="button" onClick={handleSubmitButtion}>보내기</button>
         </form>
      </div>
   );
};

export default WritePage;