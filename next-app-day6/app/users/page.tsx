'use client';

import { useState } from 'react';
import UserList from '../../components/UserList';
import UserForm from '../../components/UserForm';
//User 타입공통화
import { User } from '../types/User'; 


// interface User {
//   id: number;
//   name: string;
// }

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (name: string) => {
    const newUser = { id: Date.now(), name };
    //...prev : 전개연산자 얕은복사 주의
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div>
      <h1>유저 목록</h1>
      <UserList users={users} />
      <UserForm onAdd={handleAddUser} />
    </div>
  );
}