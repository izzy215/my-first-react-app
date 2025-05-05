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

export async function addUser(formData: FormData) {
  const name = formData.get('name') as string
  const newUser = { id: Date.now(), name }
  users.push(newUser)
  revalidatePath('/users')
}

//사용자 삭제
export async function deleteUser(id: number) {
    users = users.filter(user => user.id !== id)
    revalidatePath('/users')
  }