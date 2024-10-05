import React from 'react'

const Main = ({name, color}) => {
   return (
      <div>
         <main>
            <h1>메인 입니다.</h1>
            <h1 style={{color}}>내 이름은 {name} 입니다.</h1>
         </main>
      </div>
   )
}

export default Main;