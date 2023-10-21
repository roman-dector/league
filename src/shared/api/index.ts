import axios, { AxiosResponse } from 'axios'
import {
  Creds,
  Department,
  Lesson,
  LessonData,
  RegData,
  TimetableDay,
  TimetableItem,
} from './models'

const inst = axios.create({
  baseURL: 'https://sovcombankacademy.onrender.com',
})

export const timetable = {
  async getGroupTimetable(
    groupId: string,
    dateStart: string,
    dateFinish: string
  ): Promise<AxiosResponse<TimetableItem[]>> {
    return await inst.get(`/timetable/${groupId}`, {
      params: { date_start: dateStart, date_finish: dateFinish },
    })
  },

  async addLesson(lesson: LessonData): Promise<AxiosResponse<{}>> {
    return await inst.post('/timetable', lesson)
  },

  async changeLesson(lesson: Lesson): Promise<AxiosResponse<{}>> {
    return await inst.post('/timetable', lesson)
  },

  async getLesson(id: string): Promise<AxiosResponse<Lesson>> {
    return await inst.get(`/timetable/${id}`)
  },

  async deleteLesson(id: string): Promise<AxiosResponse<{}>> {
    return await inst.delete(`/timetable/${id}`)
  },
}

export const departments = {
  async getDepartments(): Promise<AxiosResponse<Department[]>> {
    return await inst.get('/departments')
  },
  async addDepartments(json: string): Promise<AxiosResponse<{}>> {
    return await inst.post('/timetable/', { file: json })
  },
}

export const auth = {
  async signup(
    data: RegData
  ): Promise<AxiosResponse<{ token: string }>> {
    return await inst.post('/auth/signup', data)
  },
  async signin(
    creds: Creds
  ): Promise<AxiosResponse<{ token: string }>> {
    return await inst.post('/auth/signin', creds)
  },
}
