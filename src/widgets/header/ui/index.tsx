'use client'

import style from './style.module.css'

import {
  NotificationsNone,
  CalendarMonth,
  FormatListBulleted,
  Visibility,
  Add,
  Remove,
} from '@mui/icons-material'
import { Button, Divider } from '@mui/material'
import { useRouter } from 'next/navigation'

import { Avatar } from 'entities/current-user'
import { useFontScale } from '../lib'

export function Header() {
  const router = useRouter()
  const { decrease, increase } = useFontScale()

  return (
    <>
      <div className={style.header}>
        <h3
          style={{ cursor: 'pointer' }}
          onClick={() => {
            router.push('/main')
          }}
        >
          СОВКОМБАНК
        </h3>
        <div className={style.menu}>
          <div>
            <Button
              variant='outlined'
              startIcon={<CalendarMonth />}
              onClick={() => {
                router.push('/schedule')
              }}
            >
              Расписание
            </Button>
            <Button
              variant='outlined'
              startIcon={<FormatListBulleted />}
              onClick={() => {
                router.push('/main')
              }}
            >
              Программы
            </Button>
          </div>

          <div
            style={{
              border: '1px solid #3489d8',
              borderRadius: '5px',
              padding: '4px',
            }}
          >
            <Remove
              color='action'
              sx={{ cursor: 'pointer' }}
              onClick={decrease}
            />
            <Visibility color='primary' />
            <Add
              color='action'
              sx={{ cursor: 'pointer' }}
              onClick={increase}
            />
          </div>

          <div className={style.item}>
            <NotificationsNone color='primary' />
            <Avatar />
          </div>
        </div>
      </div>
      <Divider component='div' sx={{ borderBottomWidth: '2px' }} />
    </>
  )
}
