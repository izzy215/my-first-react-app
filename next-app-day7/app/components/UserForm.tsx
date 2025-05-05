/**
 * UserForm.tsx:33 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'reset')
    at handleSubmit (\UserForm.tsx:33:23)

    e.currentTarget.reset()

    React.FormEvent<HTMLFormElement>라고 타입을 줬지만, 
    런타임에서 currentTarget을 정확히 form 엘리먼트로 참조하지 못했을 때 나는 에러


    해결 방법: ref를 써서 명확하게 form을 참조하자

    const formRef = useRef<HTMLFormElement>(null)
    formRef.current?.reset() 
 */

// components/UserForm.tsx

// export default function UserForm(
//     { action }: 
//     { action: 
//         (formData: FormData) => Promise<void>; }) {
//     return (
//       <form action={action}>
//         <input name="name" placeholder="이름 입력" required />
//         <button type="submit">추가</button>
//       </form>
//     )
//   }
  

'use client'


// import { useRef,useState } from 'react'

// export default function UserForm(
//     { action }: {
//      action: (formData: FormData) => Promise<{ success: boolean; message?: string }> }) {
        
//   const [error, setError] = useState('')
//   const formRef = useRef<HTMLFormElement>(null)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget)
//     const result = await action(formData)

//     if (!result.success) {
//       setError(result.message || '오류가 발생했습니다.')
//     } else {
//       setError('')
//       formRef.current?.reset()
//     }
//   }

//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <input name="name" placeholder="이름 입력" required />
//       <button type="submit">추가</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   )
// }

import { useFormState } from 'react-dom'
import { addUser } from '../lib/actions'

export default function UserForm(
    { action }: 
    { action: (prevState: any, formData: FormData) => Promise<any> }) {
    const [state, formAction] = useFormState(action, null)
  
    return (
      <form action={formAction}>
        <input name="name" />
        <button type="submit">추가</button>
        {state?.success === false && (
          <p style={{ color: 'red' }}>{state.message}</p>
        )}
      </form>
    )
  }

// export default function UserForm() {

//     const [state, formAction] = useFormState(addUser, { success: null })
  
//     return (
//       <form action={formAction}>
//         <input name="name" />
//         <button type="submit">추가</button>
//         {state?.success === false && <p style={{ color: 'red' }}>{state.message}</p>}
//       </form>
//     )
//   }