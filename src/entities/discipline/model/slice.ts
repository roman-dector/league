import { createSlice } from '@reduxjs/toolkit'
import type { Preview } from 'shared/ui/preview'

interface MainPageState {
  disciplines: Preview[]
  loading: boolean
}

const initialState: MainPageState = {
  disciplines: [
    {
      id: '1',
      name: 'Дисциплина 1',
      progress: 40,
    },
    {
      id: '2',
      name: 'Дисциплина 2',
      progress: 40,
    },
    {
      id: '3',
      name: 'Дисциплина 3',
      progress: 40,
    },
    {
      id: '4',
      name: 'Дисциплина 4',
      progress: 40,
    },
    {
      id: '5',
      name: 'Дисциплина 5',
      progress: 40,
    },
    {
      id: '6',
      name: 'Дисциплина 6',
      progress: 40,
    },
  ],
  loading: false,
}

const disciplinesSlice = createSlice({
  name: 'disciplines',
  initialState,
  reducers: {},
})

export default disciplinesSlice
