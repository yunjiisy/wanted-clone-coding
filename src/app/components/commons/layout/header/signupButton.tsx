'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
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
