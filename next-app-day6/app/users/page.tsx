//유저리스트 + 추가 폼

'use client';//클라이언트컴포넌트 선언

import {useEffect, useState} from 'react';

interface User{
    name:String;
    id: number;
}
export default function UserList () {
    //초기값 필요 없으면 에러 
    // const [user, setUser] = useState<{ name: string; age: number }>;
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        fetch('/api/users')
        .then(res=>res.json())
        .then((data) => {
            console.log(data)
            setUsers(data)});
    },[]);

    return (
        <div>
        <h1>UserList</h1>
        <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
    )
}