// components/UserForm.tsx

export default function UserForm(
    { action }: 
    { action: 
        (formData: FormData) => Promise<void>; }) {
    return (
      <form action={action}>
        <input name="name" placeholder="이름 입력" required />
        <button type="submit">추가</button>
      </form>
    )
  }
  