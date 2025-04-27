import React, { useState } from 'react';

//20250427
//import AppCounter 는 파일명단위로 실행한다 : 모든 파일에서 export App 이어도 상관 없음
//typescript 는 추론(inference) 한다 <number> 는 초기값이 없거나, 코드를 더 명확하게 하기 위해사용
function AppCounter() {
  const [count, setCount] = useState<number>(0);//타입추가

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>타입스크립트 카운터: {count}</h1>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </div>
  );
}

export default AppCounter


interface Person {
  name: string;
  age: number;
}

function AppAgeCounter() {
  const [person, setPerson] = useState<Person>({
    name: '지현',
    age: 29,
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>이름: {person.name}</h1>
      <h2>나이: {person.age}</h2>
      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>나이 +1</button>
    </div>
  );
}

export  { AppAgeCounter };