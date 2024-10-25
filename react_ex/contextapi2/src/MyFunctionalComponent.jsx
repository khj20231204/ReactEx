import React, { useContext } from 'react';
import MyContext from './MyContext';

// 함수 컴포넌트에서 useContext 사용
const MyFunctionalComponent = () => {
  const { myState, setMyState } = useContext(MyContext);

  return (
    <div>
      <p>{myState}</p>
      <button onClick={() => setMyState('Updated!')}>Update State</button>
    </div>
  );
};

export default MyFunctionalComponent;