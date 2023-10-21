export interface TimetableDay {
  group: string
  day: WeekDay
  date: string
  timetableItems: TimetableItem[]
}

export interface TimetableItem {
  id: string
  discipline: string
  locationType: string
  location: string
  date: string
  timeStart: string
  timeFinish: string
}

export type WeekDay =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'

export interface LessonData {
  group: string
  day: WeekDay
  discipline: string
  locationType: string
  location: string
  dateStart: string
  dateFinish: string
  timeStart: string
  timeFinish: string
}

export interface Lesson extends LessonData {
  id: string
}
