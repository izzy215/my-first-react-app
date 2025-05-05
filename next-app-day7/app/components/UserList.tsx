// components/UserList.tsx

//클라이언트 컴포넌트로 교체
'use client';

import { useTransition } from 'react';
// import { getUsers } from '../lib/actions' // 부모 page 에서 데이터 넘김 
import { deleteUser  } from '../lib/actions'

export default function UserList({ users }: { users: { id: number; name: string }[] }) {
  //const users = await getUsers()

  const [isPending, startTransition] = useTransition();

  return (
    <div>
        <ul>
        {users.map(user => (
            <li key={user.id}>{user.name}
                <button onClick={() => startTransition(() => deleteUser(user.id))}
                disabled={isPending}
                >삭제
                </button>
            </li>
        ))}
        </ul>
    </div>
  )
}
