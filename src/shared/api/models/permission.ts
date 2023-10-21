interface Permission {
  id: string
  userId: string
  role: Role[]
  actions: Action[]
}

interface Role {
  id: string
  role: string
}

interface Action {
  id: string
  action: string
}
