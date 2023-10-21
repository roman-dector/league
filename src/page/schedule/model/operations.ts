import { Lesson, LessonData, TimetableDay } from 'shared/api/models'
import { createAppThunk } from 'shared/lib'
import { timetable } from 'shared/api'
import { convertTimetableDaysToEvents } from '../lib'

export const addLesson = createAppThunk<void, LessonData>(
  'schedule/addLessons',
  //@ts-ignore
  async (data, thAPI) => {
    await timetable.addLesson(data)

    thAPI.dispatch(getEvents())
  }
)

export const getEvents = createAppThunk<Event[]>(
  'schedule/getEvents',
  //@ts-ignore
  async () => {
    let res = await timetable.getGroupTimetable(
      'T-01',
      '2023-10-16',
      '2023-11-16'
    )

    if (res.status === 200 && res.data)
      return convertTimetableDaysToEvents(res.data)
    // return [] as Event[]
  }
)
