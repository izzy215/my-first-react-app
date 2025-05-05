// users/page.tsx (리스트 + 폼)

import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
import { addUser ,getUsers} from '../lib/actions'

export default async function UsersPage() {
    const users = await getUsers()
  return (
    <div>
      <h1>유저 목록</h1>
      <UserForm action={addUser} />
      <UserList users={users}/>
    </div>
  )
}
