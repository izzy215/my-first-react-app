import React from 'react';

// 1. props 타입 먼저 정의해준다
interface AppHelloProps {
  name: string;
  age: number;
}

// 2. 컴포넌트에서 props를 타입으로 받는다
function AppHello({ name, age }: AppHelloProps) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>안녕 {name}!</h1>
      <h2>너의 나이는 {age}살 이구나!</h2>
    </div>
  );
}

export default AppHello;