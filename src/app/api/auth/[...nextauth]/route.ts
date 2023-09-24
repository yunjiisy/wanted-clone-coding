import NextAuth from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/option'

// 핸들러를 정의해준다. 여기서 nextAuth안에 옵션들을 설정해준 옵션들을 받는다.

const handler = NextAuth(options)

// handler를 내보낸다
export { handler as GET, handler as POST }
