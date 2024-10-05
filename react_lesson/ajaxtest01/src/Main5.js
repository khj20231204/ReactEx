import axios from "axios";

function Main5(){

   const loginaxios = (e) => {

   e.preventDefault(); // 창이 새로고침 되는 것을 막아준다. 

   axios.post('http://172.30.1.87/register',{
      mno : 10,
      firstName : "hong", 
      lastName : "gildong",
   }).then((res)=>{
         console.log(res.data);
         alert(res.data);

         if(res.status === 200){
            alert("회원가입 성공");
         }
      }).catch((err)=>{
         console.log(err);
      });
   };

   return(
      <div>
         <button onClick={loginaxios}>회원가입</button>
      </div>
   ) 
}
export default Main5;
      

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