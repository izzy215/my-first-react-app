// lib/actions.ts (서버 전용 로직)


'use server'

import { revalidatePath } from 'next/cache'

let users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' },
]

export async function getUsers() {
  return users
}

export async function addUser(prevState: any,formData: FormData) {
    const name = formData.get('name')?.toString().trim()
  if (!name) {
    return { success: false, message: '이름을 입력해주세요.' }
  }

  const newUser = { id: Date.now(), name }
  users.push(newUser)
  revalidatePath('/users')

  return { success: true }
}

//사용자 삭제
export async function deleteUser(id: number) {
    users = users.filter(user => user.id !== id)
    revalidatePath('/users')
  }