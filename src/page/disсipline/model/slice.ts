import { createSlice } from '@reduxjs/toolkit'
import type { Preview } from 'shared/ui/preview'
import { getLessons } from './operations'

interface DisciplinesPageState {
  lessons: Preview[]
  loading: boolean
}

const initialState: DisciplinesPageState = {
  lessons: [],
  loading: true,
}

const disciplinePageSlice = createSlice({
  name: 'discipline-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLessons.fulfilled, (state, action) => {
        state.lessons = action.payload
        state.loading = false
      })
      .addCase(getLessons.pending, state => {
        state.loading = true
      })
  },
})

export default disciplinePageSlice
