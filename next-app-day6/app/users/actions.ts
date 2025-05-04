'use server';

import { revalidatePath } from 'next/cache';

let users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' }
];

export async function getUsers() {
  return users;
}

export async function addUser(name: string) {
  const newUser = { id: Date.now(), name };
  users.push(newUser);

  // `/users` 페이지 새로고침
  revalidatePath('/users');
}