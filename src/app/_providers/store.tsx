import { FC } from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// import { mainPageModel } from 'page/main'
import { disciplinePageModel } from 'page/disсipline'
import { currentUserModel } from 'entities/current-user'
import { newsModel } from 'entities/news'
import { disciplineModel } from 'entities/discipline'
import { lessonModel } from 'entities/lesson'
import { scheduleModel } from 'page/schedule'

export const store = configureStore({
  reducer: combineReducers({
    curentUser: currentUserModel.reducer,
    news: newsModel.reducer,
    discipline: disciplineModel.reducer,
    lesson: lessonModel.reducer,
    schedule: scheduleModel.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

window.__store__ = store

export function withStore(Component: FC<any>): FC<any> {
  return (props: any) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
