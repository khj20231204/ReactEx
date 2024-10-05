import axios from 'axios'

const Main4 = () => {

   const loginaxios = () => {

      axios.post('http://172.30.1.87/sample',{
         mno : 10,
         fn : 'hong',
         ln : 'ddong'
      }).then((res)=> {
         console.log(res)

         if(res.status == 200) alert("success");
      })
   }

   return(
      <div>
         <button onClick={loginaxios}></button>
      </div>
   )

}

export default Main4;