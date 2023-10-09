'use client'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { useModal } from '@/app/components/commons/modal/modal-context-ex'
import { signIn } from 'next-auth/react'
import Google from '../../../public/assets/svg/google-logo.svg'
const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 30,
  padding: 30,
})

interface FormData {
  Id: string
  password: string
}

const SigninPage = () => {
  const { dispatch } = useModal()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const { Id, password } = data
    if (Id === 'helloworld' && password === 'Qwer!234') {
      // 로그인 성공
      setIsLoggedIn(true)

      console.log(isLoggedIn)
      console.log('로그인 성공')
    }
    if (Id !== 'helloworld' || password !== 'Qwer!234') {
      // 로그인 실패
      dispatch({
        type: 'Visible',
        payload: {
          title: '로그인 실패',
          content:
            '아이디 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.',
        },
      })
      setFocus('Id')
      console.log(isLoggedIn)

      console.log('로그인 실패')
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <StyledDiv>
          <h1>로그인 성공</h1>
        </StyledDiv>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv>
            <h1>회원가입</h1>

            <TextField
              sx={{
                ' .MuiOutlinedInput-root': {
                  margin: 1,
                },
              }}
              {...register('Id', {
                required: '아이디를 입력해주세요.',
              })}
              label="ID"
              type="string"
              variant="outlined"
            />
            <p>{errors.Id?.message}</p>
            <TextField
              sx={{
                ' .MuiOutlinedInput-root': {
                  margin: 1,
                },
              }}
              {...register('password', {
                required: '비밀변호를 입력해주세요.',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message: '패스워드 형식에 맞지 않습니다. 다시 입력해주세요',
                },
              })}
              label="password"
              type="password"
              variant="outlined"
            />
            <p>{errors.password?.message}</p>
            <Button
              variant="contained"
              sx={{
                margin: 1,
                color: 'black',
                ':hover': { color: 'white' },
              }}
              type="submit"
            >
              로그인
            </Button>
            <button
              className="flex gap-4 h-auto w-64 items-center justify-center rounded-md border border-gray-300 px-4 py-2"
              onClick={async () => await signIn('google')}
            >
              <Google width="25" height="25"></Google>
              Sign in with Google
            </button>
          </StyledDiv>
        </form>
      )}
    </div>
  )
}

export default SigninPage
