'use client'
import styled from '@emotion/styled'
const Wrapper = styled.div`
  height: 50px;
  background-color: gray;
`
// interface ColoredBoxDivType {
//   color: 'red' | 'blue'
//   type: '1' | '2'
// }
// const Wrapper2 = styled(`div`)<ColoredBoxDivType>((props) => {
//   const colored = props.color + props.type
//   return (colored)
// })
export default function LayoutFooter(): JSX.Element {
  return <Wrapper>여기는 푸터</Wrapper>
}
