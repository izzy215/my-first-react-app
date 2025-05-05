'use client';

import { useState } from 'react';
import { addUser } from '../app/users/actions'; 

//porps 타입 인라인선언
//export default function UserForm({ onAdd }: { onAdd: (name: string) => void }) {
  
//Props 타입을 따로 선언해서 컴포넌트에 넣는 방식.
// props가 많아지거나, 다른 컴포넌트에서도 재사용할 때 유리하고,
// 코드 가독성·유지보수성이 더 좋아짐.
interface Props {
    onAdd: (name: string) => void;
  }
  
  export default function UserForm({ onAdd }: Props) {

//   const [name, setName] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim()) return;
//     onAdd(name);
//     setName('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="이름 입력"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">추가</button>
//     </form>
//   );
// }


// export default function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    await onAdd(name); // 서버 액션 호출
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}