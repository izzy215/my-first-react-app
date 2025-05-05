# 디렉터리 구조 
app/
├── layout.tsx
├── page.tsx (홈)
└── users/
    ├── page.tsx (리스트 + 폼)
components/
├── UserList.tsx
├── UserForm.tsx
lib/
└── actions.ts (서버 전용 로직)

# day7 핵심 주제 요약 
1. Form 데이터 서버에 저장하기
useState 대신 서버 액션으로 직접 저장

form action={addUser} 쓰면 POST 요청처럼 작동

클라이언트에서 데이터 조작 없이 바로 처리 가능

2. 서버 액션을 사용한 CRUD 흐름
/app/users/page.tsx → 폼 → 서버 함수(addUser) 호출

action.ts에서 users 배열 직접 관리

revalidatePath('/users')로 새로고침 없이 업데이트

3. 클라이언트/서버 역할 구분
컴포넌트는 'use client'로 선언한 것만 클라이언트에서 동작

나머지는 서버에서 처리되며, 비동기 로직도 가능