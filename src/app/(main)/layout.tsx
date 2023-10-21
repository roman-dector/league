import style from './style.module.css'

import { Header } from 'widgets/header'

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className={style.main}>{children}</div>
    </>
  )
}
