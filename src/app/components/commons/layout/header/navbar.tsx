'use client'
import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
  flex 
  items-center 
  justify-center 
  gap-6
  group
`

const MenuItem = tw.a`
  text-center
  group
  border-transparent
  text-sm	
  font-medium
  group-hover:text-gray-400
`
const HoverTextColor = tw.p`
  hover:text-black
`

export default function NavBar(): JSX.Element {
  return (
    <Wrapper>
      <MenuItem href="/hire/wdlist">
        <HoverTextColor>채용</HoverTextColor>
      </MenuItem>
      <MenuItem href="/event/eventlist">
        <HoverTextColor>이벤트</HoverTextColor>
      </MenuItem>
      <MenuItem href="#">
        {' '}
        <HoverTextColor>이력서</HoverTextColor>
      </MenuItem>
      <MenuItem href="#">
        {' '}
        <HoverTextColor>소셜</HoverTextColor>
      </MenuItem>
      <MenuItem href="#">
        {' '}
        <HoverTextColor>프리랜서</HoverTextColor>
      </MenuItem>
      <MenuItem href="#">
        <HoverTextColor>AI 합격예측</HoverTextColor>
      </MenuItem>
    </Wrapper>
  )
}
