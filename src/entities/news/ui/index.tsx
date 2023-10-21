'use client'

import { Close } from '@mui/icons-material'
import style from './style.module.css'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { News } from 'shared/api/models'
import { Modal } from 'shared/ui/modal'

export function NewsPreview(props: News) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Card
        className={style.newsPreview}
        onClick={() => {
          setOpen(true)
        }}
      >
        <CardMedia
          sx={{
            width: '40px',
            height: '40px',
          }}
          image={props.picture}
        />
        <CardContent>
          <>{props.title}</>
        </CardContent>
      </Card>
      {open && (
        <NewsModal
          {...props}
          close={() => {
            setOpen(false)
            console.log('close modal')
          }}
        />
      )}
    </>
  )
}

export function NewsModal(props: News & { close: () => void }) {
  return (
    <Modal close={props.close}>
      <div className={style.newsCardBg}>
        <Card
          className={style.newsCard}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <Typography variant='h5' component='div'>
              {props.title}
            </Typography>
            <Close
              className={style.closeCross}
              onClick={props.close}
            />
          </div>
          <CardMedia
            component='img'
            height={'200px'}
            sx={{
              marginBottom: '20px',
            }}
            src={props.picture}
          />
          <CardContent
            sx={{
              padding: 0,
            }}
          >
            <Typography
              overflow={'auto'}
              height={'400px'}
              variant='body1'
              component='div'
            >
              {props.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Modal>
  )
}
