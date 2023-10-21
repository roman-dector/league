'use client'

import { Avatar as AvatarM } from '@mui/material'
import { currentUserModel } from '..'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

interface AvatarProps {
  size?: 'small' | 'normal' | 'big' | 'large'
}

const sizesInPx = {
  small: 20,
  normal: 40,
  big: 80,
  large: 120,
}

export function Avatar(props: AvatarProps) {
  let size = props.size ?? 'normal'

  const user = useSelector(currentUserModel.selectors.user)
  const router = useRouter()

  return (
    <AvatarM
      sx={{
        width: sizesInPx[size] + 'px',
        height: sizesInPx[size] + 'px',
      }}
      src={''}
      onClick={() => {
        router.push('/account')
      }}
    >
      {'' ? null : user.name[0] + user.lastname[0]}
    </AvatarM>
  )
}
