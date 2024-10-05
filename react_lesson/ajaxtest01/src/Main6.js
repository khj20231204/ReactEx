import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Main6(){
   const [ mno, setMno ] = useState(0);
   const [ firstName, setFirstName ] = useState('');
   const [ lastName, setLastName ] = useState('');

   // const navigator = useNavigate();

   const loginaxios = (e) => {
      
      e.preventDefault(); // 창이 새로고침되는 것을 막아준다. 

      axios.post('http://172.30.1.87/register2',{
         mno : mno,
         firstName : firstName, 
         lastName : lastName,
      }).then((res)=>{
         console.log(res.data);
         alert(res.data);
         
         if(res.status === 200){
            alert("회원가입 성공"); 
            // navigator('/login')
         }
      }).catch((err)=>{
         console.log(err);
      });
   }; // loginaxios() end
   
   return(
   <div>
      mno : <input type="text" onChange={(e)=>{
         setMno(e.target.value);
      }} /> 
      
      <br/><br/>

      firstName : <input type="text" onChange={(e)=>{
         setFirstName(e.target.value);
      }} /> 
      
      <br/><br/>

      lastName : <input type="text" onChange={(e)=>{
         setLastName(e.target.value);
      }} /> 
      
      <br/><br/> 
      
      <button onClick={loginaxios}>회원가입</button>
   </div>
   ) 
} // Main6 end
export default Main6; 

/*
@RestController
@CrossOrigin("*")
public class HomeController {

   @RequestMapping("/register")
   public Integer register(@RequestBody SampleVo sv) {
      
      System.out.println("mno:"+ sv.getMno());
      System.out.println("firstName:"+ sv.getFirstName());
      System.out.println("lastName:"+ sv.getLastName());
      int result = 1;

   return result;
   }
}
*/