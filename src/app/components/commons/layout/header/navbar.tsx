'use client'

import styled from '@emotion/styled'
import tw from 'tailwind-styled-components'

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem /* 24px */;
`

const MenuItem = tw.a`
  text-center
  group
  hover:border-b-2
  border-transparent
  hover:border-gray-500
`

export default function NavBar(): JSX.Element {
  return (
    <Wrapper>
      <MenuItem href="#">채용</MenuItem>
      <MenuItem href="#">이벤트</MenuItem>
      <MenuItem href="#">이력서</MenuItem>
      <MenuItem href="#">소셜</MenuItem>
      <MenuItem href="#">프리랜서</MenuItem>
      <MenuItem href="#">AI 합격예측</MenuItem>
    </Wrapper>
  )
}
