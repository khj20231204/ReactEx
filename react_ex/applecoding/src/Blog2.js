import { useState } from "react";

const Blog2 = () => {
   let [글제목, 글제목변경] = useState(['가을 남자 코디','강남 맛집','여행지 노선도']);

   let [good, setGood] = useState([[0],[0],[0]]);
   let [checkModal, setCheckModal] = useState(false);
   let [modalTitle, setModalTitle] = useState();

   return (
      <div className="blog">
         <div className="title">React Blog</div>

         {글제목.map((e,i)=>{
            return (
               <div className="list2">
                  <h3><span onClick={()=>{
                     checkModal ? setCheckModal(false) : setCheckModal(true)

                     //클릭했을 때 모달로 값 넘기기
                     setModalTitle(e);
                     
                  }} style={{cursor:'pointer'}}>{e}</span> <span onClick={()=>{
                        let copy = [...good];
                        copy[i] = Number(copy[i])+1;
                        setGood(copy);
                     }}>👍</span> ({good[i]}) </h3>
                  <h5>작성 일자</h5>
               </div>  
            )
         })}

         {
            checkModal ? <Modal title={modalTitle}></Modal> : null
         }


      </div>
   )
}


//모달을 컴포넌트로 만들고 삼항연산자로
const Modal = (props) => {
   return (
      <div name="modal" className="mymodal">
         <h4>제목 : {props.title}</h4>
         <h5>작성자</h5>
         <h5>content</h5>
      </div>
   )
}

export default Blog2;