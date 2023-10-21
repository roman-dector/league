'use client'

import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { Button, Input } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

const loginValidation = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})

interface LoginData {
  email: string
  password: string
}

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginData>({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidation),
  })

  const callbackUrl = useSearchParams().get('callbackUrl') || '/'

  const onSubmit: SubmitHandler<LoginData> = async data => {
    await signIn('credentials', {
      callbackUrl,
      redirect: false,
      ...data,
    })
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexFlow: 'column',
          width: '400px',
          margin: '0 auto',
        }}
      >
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input placeholder='Email' {...field} />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input placeholder='Password' {...field} />
          )}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
    </main>
  )
}
