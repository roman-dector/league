import { createSlice } from '@reduxjs/toolkit'
import { User } from 'shared/api/models'

const initialState: User = {
  id: '1',
  name: 'Roman',
  lastname: 'Dector',
  email: 'st076371@student.spbu.ru',
  fathername: 'RD',
  job: {
    id: '1',
    post: 'Frontend-developer',
    experience: 2,
    department: { id: '1', name: 'TIAS', code: 'FO19' },
    achievement: [{}],
  },
} as User

const currentUserSlice = createSlice({
  name: 'current-user',
  initialState,
  reducers: {},
})

export default currentUserSlice
