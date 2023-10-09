import { options } from '@/app/api/auth/[...nextauth]/option'
import SignupButton from '@/app/components/commons/layout/header/signupButton'
import { getServerSession } from 'next-auth'

export default async function Signup() {
  // session (회원정보)
  // 다른데로 빼기 페이지별로 빼든가 해야함
  const session = await getServerSession(options)

  console.log(session)

  return <SignupButton />
}
