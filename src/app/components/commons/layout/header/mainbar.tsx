'use client'
import styled from '@emotion/styled'
// import Image from 'next/image'
import SvgIcon from '@mui/material/SvgIcon'
import MenuIcon from '@mui/icons-material/Menu'
const Wrapper = styled.div`
  height: 50px;
  background-color: yellow;
`

export default function MainBar(): JSX.Element {
  return (
    <Wrapper>
      <SvgIcon style={{ fontSize: 50 }}>
        <MenuIcon />
      </SvgIcon>
    </Wrapper>
  )
}
