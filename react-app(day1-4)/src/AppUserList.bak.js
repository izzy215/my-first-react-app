import React, { useEffect, useState } from 'react';

function AppUserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => setUsers(data))
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