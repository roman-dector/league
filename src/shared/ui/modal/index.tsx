'use client'

import style from './style.module.css'

import { ReactNode, useMemo } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: ReactNode
  close?: () => void
}

export function Modal(props: ModalProps) {
  const container = useMemo(
    () => document.querySelector('#modalRoot'),
    []
  )
  return createPortal(
    <div className={style.modal} onClick={props.close}>
      {props.children}
    </div>,
    container!
  )
}
