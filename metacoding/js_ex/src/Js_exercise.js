
let a = [1,2,3];

//jsx 안에서 for문 사용 불가
/*
for(var i=0 ; i<a.length ; i++){
   console.log(a[i])
}*/

//a.forEach(callback함수)
//a.forEach((n) => {console.log(n)}) //함수 실행
//a.forEach((n) => console.log(n)) //자동 리턴문, forEacn는 리턴을 하지 않아서 값을 뿌리고 끝난다

//값을 받아서 복사하기 위해서는 리턴을 받아야한다.

let b_ = a.forEach(() => {}); //리턴을 하지 않는다
let b = a.map(()=> {});  //리턴을 한다
//console.log(`b_:${b_} , b:${b}`);  //b_:undefined , b:,,

b = a.map((n) => n); //b = [...a];
/* b = a.map((n) => n); 와 b = [...a] 는  결과는 같지만 map는 값을 가공할 수 있다 */
console.log(b)

let list = [1,2,3];

const users = [
   {id:1, name:'강백호', phone:'111'},
   {id:2, name:'홍길동', phone:'2222'},
   {id:3, name:'김덕수', phone:'3333'}
];

const updateUserDto = {
   id:2, name:"홍길동"
};

let Js_excercise = () => {
   return(
      <>
         <div>{list.map((n) => <h1>{n}</h1>)}</div>
      </>
   )
}

export default Js_excercise;