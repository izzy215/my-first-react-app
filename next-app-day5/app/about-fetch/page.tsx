
'use client';

//useState : 컴포넌트 안에 상태(state) 를 저장
//useEffect : 컴포넌트가 렌더링될 때 실행할 사이드 이펙트(부수효과) 지정하기 (예: fetch, console.log 등)
//관계 : 상태바뀌면 -> 렌더링 -> useEffect 다시 실행
import { useEffect, useState } from 'react';

export default function AboutPage2() {
  const [user, setUser] = useState<{ name: string; age: number } | null>(null);

  //[]의존성 배열  없음 : 모든 렌더링마다 , 빈 베열 []: 최초 1번만 : 특정변수 [count] 그 변수 바뀔때만
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {user ? (
        <p>{user.name}님은 {user.age}살입니다.</p>
      ) : (
        <p>불러오는 중...</p>
      )}
    </div>
  );
}