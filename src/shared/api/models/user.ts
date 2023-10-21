export interface User {
  id: string
  email: string
  name: string
  lastname: string
  fathername: string
  job: Job
}

export interface Job {
  id: string
  department: Department
  post: string
  experience: number
  achievement: Achievement[]
}

export interface Department {
  id?: string
  code: string
  name: string
}

export interface Achievement {
  id: string
  userId: string
  achievement: string
}

export interface Creds {
  email: string
  password: string
}

export interface RegData extends Creds {
  firstname: string
  lastname: string
  fathername: string
  avatar: string
  role: 'ENROLLEE'
  gender: 'WOMAN' | 'MAN'
  department: {
    code: string
    name: string
  }
  post: string
  experience: number
  achievements: string[]
}
