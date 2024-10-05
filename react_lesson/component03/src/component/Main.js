import React from 'react';

const Main = ({name, location, color, list}) => {
   return (
      <div style={{color}}>
         {name}은 {location}에 거주합니다. 
         좋아하는 음식 수는 {list.length}개 입니다.
      </div>
   );
}

export default Main;