'use client'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'

const Wrapper = tw.div`
flex 
items-center
text-sm
`

export default function LogIn(): JSX.Element {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'authenticated' ? (
        <Wrapper>
          {/* <div>{session.user?.name}</div> */}
          <Image
            src={session.user?.image ?? ' '}
            alt="profile image"
            width={35}
            height={35}
            style={{ borderRadius: '50%' }}
            className="m-2"
          />
          <div className="text-gray-400">|</div>

          <button
            className="p-2"
            onClick={async () => {
              await signOut()
            }}
          >
            logout
          </button>
        </Wrapper>
      ) : (
        <Wrapper>
          <Link href="/signup">
            <div>회원가입</div>
          </Link>
          <div>/</div>
          <button
            onClick={async () => {
              await signIn()
            }}
          >
            로그인
          </button>
        </Wrapper>
      )}
    </>
  )
}
