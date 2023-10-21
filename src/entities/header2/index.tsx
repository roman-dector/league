'use client'

import { ArrowBack } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { Badge, BadgeProps, styled } from '@mui/material'

export function Header2({
  disciplineTitle,
  groupId,
}: {
  disciplineTitle: string
  groupId: string
}) {
  const router = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        background: '#1976D2',
        borderRadius: '10px',
        gap: '40px',
        padding: '0 30px',
        color: '#FFF',
      }}
    >
      <ArrowBack
        onClick={() => {
          router.back()
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1>{disciplineTitle}</h1>
        <StyledBadge
          badgeContent={`Группа ${groupId}`}
          color='secondary'
        >
          <div
            style={{
              minWidth: '5em',
              height: '3em',
            }}
          />
        </StyledBadge>
      </div>
    </div>
  )
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    position: 'relative',
    right: '7em',
    top: '1.5em',
    fontWeight: 600,
    fontSize: '1em',
    height: '1.5em',
  },
}))
