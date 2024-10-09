import React, { useState, useEffect } from 'react';

const RandomMouseMove = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedValue, setClickedValue] = useState('');

  // 마우스 움직임을 추적하는 함수
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // 특정 요소 클릭 시 값을 가져오는 함수
  const handleClick = (value) => {
    setClickedValue(value);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>마우스 움직임 추적</h1>
      <p>마우스 위치: X - {mousePosition.x}, Y - {mousePosition.y}</p>
      
      <div
        onClick={() => handleClick('첫 번째 요소')}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
          margin: '10px',
          cursor: 'pointer',
        }}
      >
        첫 번째 요소 (클릭하세요)
      </div>

      <div
        onClick={() => handleClick('두 번째 요소')}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightgreen',
          margin: '10px',
          cursor: 'pointer',
        }}
      >
        두 번째 요소 (클릭하세요)
      </div>

      <div
        onClick={() => handleClick('세 번째 요소')}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightcoral',
          margin: '10px',
          cursor: 'pointer',
        }}
      >
        세 번째 요소 (클릭하세요)
      </div>

      {clickedValue && <p>클릭된 요소 값: {clickedValue}</p>}
    </div>
  );
};

export default RandomMouseMove;