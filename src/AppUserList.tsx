import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
  }

function AppUserList() {
    const [users, setUsers] = useState<User[]>([]); //  타입 명시
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data: User[]) => setUsers(data)) //  data 타입 명시
    },[])

    return (
        <div>
            <h1>유저목록</h1>
            <ul>
                { users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AppUserList;