import React, { useEffect, useState } from 'react';
import axios from 'axios';

//렌더링될 때 상태감지하기위해 useEffect 사용 
//렌더링될때 setLoading(true) 실행되며 axios 실행 종료시 setLoading(false)
//useState 는 이름 상관없이 순서대로 관리
//return 은 많아도 하나만 타면 실행 x

//useEffect api 호출, 상태관리 : 컴포넌트가 처음 렌더링될 때 실행

function AppUserListAxios() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
              setUsers(res.data);
              setLoading(false); // 데이터 받아오면 로딩 끝
          })
          .catch((err) => {
            
              console.error('에러발생:', err);
              setLoading(false);// 에러여도 로딩 끝내기
          })
    },[]);

    if (loading) {
        return <p>로딩 중 ..</p>;
    }

    return (
        <div>
          <h1>유저목록(Axios)</h1>
          <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
    );
}

export default AppUserListAxios;