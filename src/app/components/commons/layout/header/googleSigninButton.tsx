'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import Google from '../../../../../../public/assets/svg/google-logo.svg'

export default function GoogleSigninButton() {
  return (
    <button
      className="flex gap-4 h-auto w-64 items-center justify-center rounded-md border border-gray-300 px-4 py-2"
      onClick={async () => await signIn('google')}
    >
      <Google width="25" height="25"></Google>
      Sign in with Google
    </button>
  )
}
