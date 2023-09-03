'use client'
import React, { useState, useRef } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
import { useModal } from '../modal/modal-context-ex'
import Modal from '../modal/modal'

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 30,
  padding: 30,
})

const SignUpP: React.FC = () => {
  const [Id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const { dispatch } = useModal()

  const SignupValidation = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

    if (password.match(passwordRegex) == null) {
      passwordRef.current?.focus()
      setPassword('')
      dispatch({
        type: 'Visible',
        payload: {
          title: '제약 조건 위반',
          content:
            '패스워드를 확인해 주세요.\n  8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개',
          useConfirm: true,
          onConfirm: () => {
            passwordRef.current?.focus()
          },
        },
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.match(emailRegex) == null) {
      setEmail('')
      dispatch({
        type: 'Visible',
        payload: {
          title: '제약 조건 위반',
          content:
            '이메일을 확인해 주세요.\n  8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개',
          onConfirm: () => {
            emailRef.current?.focus()
          },
          useConfirm: true,
        },
      })
      emailRef.current?.focus()
      return
    }
    dispatch({
      type: 'Visible',
      payload: {
        title: '회원가입 완료',
        content: '회원가입이 완료되었습니다!',
      },
    })
    console.log('회원가입 성공')
  }

  return (
    <StyledDiv>
      <h1>회원가입</h1>
      <TextField
        sx={{
          ' .MuiOutlinedInput-root': {
            margin: 1,
          },
        }}
        label="id"
        value={Id}
        onChange={(e) => {
          setId(e.target.value)
        }}
        variant="outlined"
      />
      <TextField
        sx={{
          ' .MuiOutlinedInput-root': {
            margin: 1,
          },
        }}
        label="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        variant="outlined"
        inputRef={passwordRef}
      />
      <TextField
        sx={{
          ' .MuiOutlinedInput-root': {
            margin: 1,
          },
        }}
        label="wmail"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        variant="outlined"
        inputRef={emailRef}
      />
      <Button
        variant="contained"
        sx={{
          margin: 1,
          color: 'black',
          ':hover': { color: 'white' },
        }}
        onClick={SignupValidation}
      >
        회원가입
      </Button>
      <Modal></Modal>
    </StyledDiv>
  )
}

export default SignUpP
