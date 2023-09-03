'use client'

import styled from '@emotion/styled'
import SvgIcon from '@mui/material/SvgIcon'
import Search from '@mui/icons-material/Search'
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`

export default function SearchButton(): JSX.Element {
  return (
    <Wrapper>
      <SvgIcon style={{ fontSize: 30 }}>
        <Search />
      </SvgIcon>
      <div className="pl-2">기업 서비스</div>
    </Wrapper>
  )
}
