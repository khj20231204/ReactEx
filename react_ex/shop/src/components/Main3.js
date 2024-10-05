import '../App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

function Main2(props){

   let [loading, setLoading] = useState(false);
   let [altermore, setAltermore] = useState(false);
   let [click, setClick] = useState(0);

   let moreProduct = function(){
      setLoading(true)

      let url;
      if(click === 1){
         url = "https://codingapple1.github.io/shop/data2.json";
      }else if(click === 2){
         url = "https://codingapple1.github.io/shop/data3.json";
      }else if(click > 2){
         setAltermore(true);
         setLoading(false);
      }

      axios.get(url)
         .then((response)=>{
            let newShoes = response.data;
            let copyShoes = [...props.shoes, ...newShoes];
            props.setShoes(copyShoes);
            setLoading(true)
         }).catch()
   }

   useEffect(() => {
      if(click !== 0){
         moreProduct();
      }
   },[click])

   return(
      <>
         {loading && <Loading />}
         {aletermore && <Alertmore />}
         {props.shoes.map((e,i) => {
            <div></div>
         })}
      </>
   )
}

function Product(props){
   return(
      <>

         <img src={"/img2/shoes"}/>
      </>
   )
}

function Loading(){
   return(
      <div>상품 로딩중</div>
   )
}

function Alertmore(){
   return(
      <div>상품이 더 없습니다.</div>
   )
}