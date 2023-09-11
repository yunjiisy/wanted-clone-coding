'use client'

import tw from 'tailwind-styled-components'
import Link from 'next/link'
const Wrapper = tw.div`
h-12 
flex 
items-center
text-sm
`

export default function SignupButton(): JSX.Element {
  return (
    <Wrapper>
      <Link href="/signup">
        <div>회원가입</div>
      </Link>
      <div>/</div>
      <Link href="/signin">
        <div>로그인</div>
      </Link>
    </Wrapper>
  )
}
