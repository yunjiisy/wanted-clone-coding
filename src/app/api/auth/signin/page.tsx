import React from 'react'
import { signIn } from 'next-auth/react'
import Google from '../../../../../public/assets/svg/google-logo.svg'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/option'

const SigninPage = async () => {
  const session = await getServerSession(options)
  if (session) {
    return { redirect: { destination: '/' } }
  }
  return (
    <div>
      <h1>로그인</h1>

      <button
        className="flex gap-4 h-auto w-64 items-center justify-center rounded-md border border-gray-300 px-4 py-2"
        onClick={async () => await signIn('google')}
      >
        <Google width="25" height="25"></Google>
        Sign in with Google
      </button>
    </div>
  )
}

export default SigninPage
