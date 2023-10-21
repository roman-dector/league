import { createSlice } from '@reduxjs/toolkit'
import { TimetableDay } from 'shared/api/models'
import { getEvents, addLesson } from './operations'

interface Schedule {
  events: Event[]
}

const initialState: Schedule = {
  events: [],
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload
    })
  },
})

export default scheduleSlice
