import style from './style.module.css'
import { Input } from '@mui/material'
import { Avatar, currentUserModel } from 'entities/current-user'
import { useSelector } from 'react-redux'

export function Account() {
  const user = useSelector(currentUserModel.selectors.user)

  return (
    <main className={style.main}>
      <div className={style.ava}>
        <Avatar size='large' />
      </div>

      <div className={style.info}>
        <Input disabled value={user.name} />
        <Input disabled value={user.lastname} />
        <Input disabled value={user.fathername} />
      </div>
      <div className={style.info}>
        <Input disabled value={user.job.department.name} />
        <Input disabled value={user.job.post} />
        <Input disabled value={user.job.experience + ' г. опыта'} />
      </div>
    </main>
  )
}
