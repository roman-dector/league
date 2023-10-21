import { useDispatch } from 'react-redux'
import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { WeekDay } from 'shared/api/models'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const createAppThunk = <Returned = void, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    { state: RootState }
  >,
  options?:
    | AsyncThunkOptions<ThunkArg, { state: RootState }>
    | undefined
) => {
  return createAsyncThunk<Returned, ThunkArg, { state: RootState }>(
    typePrefix,
    payloadCreator,
    options
  )
}

export function dateStrToWeekDay(date: Date): WeekDay {
  switch (date.getDay()) {
    case 1:
      return 'MONDAY'
    case 2:
      return 'TUESDAY'
    case 3:
      return 'WEDNESDAY'
    case 4:
      return 'THURSDAY'
    case 5:
      return 'FRIDAY'
  }

  return 'MONDAY'
}
