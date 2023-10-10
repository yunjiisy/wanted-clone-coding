import React from 'react'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/option'
import GoogleSigninButton from '@/app/components/commons/layout/header/googleSigninButton'
const SigninPage = async () => {
  const session = await getServerSession(options)
  if (session) {
    return { redirect: { destination: '/' } }
  }
  return (
    <div className="relative flex flex-col items-center">
      <h1>로그인</h1>
      <GoogleSigninButton />
    </div>
  )
}

export default SigninPage
