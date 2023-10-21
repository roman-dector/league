'use client'

import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'

export function withSession(Component: FC<any>): FC<any> {
  return (props: any) => (
    <SessionProvider>{<Component {...props} />}</SessionProvider>
  )
}
