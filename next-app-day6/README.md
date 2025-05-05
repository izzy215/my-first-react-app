# 디렉토리 구조
next-app-day6/
├─ app/
│  ├─ api/
│  │  └─ users/
│  │     └─ route.ts          ← (기존 API 방식, 지금은 거의 사용 안 함)
│  ├─ users/
│  │  ├─ page.tsx             ← 사용자 목록 페이지
│  │  ├─ layout.tsx           ← users 페이지 전용 layout (있다면)
│  └─ types/
│     └─ User.ts              ← 공통 User 타입 정의
│
├─ components/
│  ├─ UserList.tsx           ← 유저 목록 UI 컴포넌트
│  └─ UserForm.tsx           ← 유저 추가 폼 UI 컴포넌트
│
├─ actions.ts                ← 서버 액션 (데이터 로직: getUsers, addUser)

# 전체 흐름도

      [브라우저: /users 접속]
                │
                ▼
     ┌──────────────────────────────┐
     │   app/users/page.tsx         │
     │   - getUsers() 서버 호출     │
     │   - users를 UserList에 전달 │
     │   - handleAddUser 함수 생성  │
     └──────────────────────────────┘
                │
                ▼
     ┌──────────────────────────────┐
     │   components/UserList.tsx    │
     │   - props.users 받아 리스트 출력 │
     └──────────────────────────────┘
                │
                ▼
     ┌──────────────────────────────┐
     │   components/UserForm.tsx    │
     │   - 입력 → submit →          │
     │     addUser(name) 서버 액션 호출 │
     └──────────────────────────────┘
                │
                ▼
     ┌──────────────────────────────┐
     │     actions.ts               │
     │  - users 배열에 추가         │
     │  - revalidatePath('/users') │
     └──────────────────────────────┘
                │
                ▼
     🔄 /users 페이지 자동 새로고침 + 최신 리스트 반영