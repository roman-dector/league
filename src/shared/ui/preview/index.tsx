'use client'

import style from './style.module.css'

import { useState } from 'react'
import { LinearProgress, Skeleton } from '@mui/material'
import { PlayCircle, PlayCircleOutline } from '@mui/icons-material'
import cn from 'classnames'

export interface Preview {
  id: string
  name: string
  progress: number
  isVideo?: boolean
  image?: string
}

export function SkeletonPreviewCard() {
  return (
    <div className={style.container}>
      <Skeleton
        animation='wave'
        variant='rounded'
        sx={{
          width: '100%',
          height: '150px',
          borderRadius: '10px',
          marginBottom: '10px',
        }}
      />
      <Skeleton
        animation='wave'
        sx={{
          height: '8px',
          borderRadius: '5px',
          marginBottom: '5px',
        }}
      />
      <Skeleton
        animation='wave'
        variant='text'
        sx={{
          fontSize: '1.1em',
        }}
      />
    </div>
  )
}

export function ImagePreviewCard(props: Preview) {
  let [hover, setHover] = useState(false)

  return (
    <div className={style.container}>
      <div
        className={style.imageContainer}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        {props.image ? (
          <img
            className={cn(style.image, {
              [style.hover]: !props.isVideo,
            })}
            alt='course preview image'
            src={props.image}
          />
        ) : (
          <div
            className={cn(style.pattern, style.image, {
              [style.hover]: !props.isVideo,
            })}
          />
        )}
        {!props.isVideo ? null : (
          <div>
            {hover ? (
              <PlayCircle
                sx={{
                  fontSize: '70px',
                  color: 'white',
                  zIndex: 9,
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: 'auto',
                }}
              />
            ) : (
              <PlayCircleOutline
                sx={{
                  fontSize: '70px',
                  color: 'white',
                  zIndex: 9,
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: 'auto',
                }}
              />
            )}
          </div>
        )}
      </div>

      <LinearProgress
        value={props.progress}
        variant='determinate'
        sx={{
          height: '8px',
          borderRadius: '5px',
          marginBottom: '5px',
        }}
      />
      <span className={style.title}>{props.name}</span>
    </div>
  )
}
