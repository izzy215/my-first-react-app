'use client';

// import { useState, useEffect } from 'react';
// import UserForm from './UserForm';
//User 타입공통화
import { User } from '../app/types/User'; 
// interface User {
//   id: number;
//   name: string;
// }

export default function UserList({users}: { users:User[]}) {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(data => setUsers(data));
  // }, []);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}