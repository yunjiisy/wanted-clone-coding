'use client'
import styled from '@emotion/styled'
const Wrapper = styled.div`
  height: 50px;
  background-color: #f1f1f1;
`

export default function LayoutFooter(): JSX.Element {
  return <Wrapper className="fixed bottom-0 w-full">footer</Wrapper>
}
