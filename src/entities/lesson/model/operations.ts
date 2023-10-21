import { createAppThunk } from 'shared/lib'
import type { Preview } from 'shared/ui/preview'

export const getLessons = createAppThunk<Preview[], string>(
  'discipline/getLessons',
  async (data, thAPI) => {
    return [
      {
        id: '1',
        name: 'Лекция 1',
        progress: 20,
      },
      {
        id: '2',
        name: 'Лекция 2',
        progress: 40,
      },
      {
        id: '3',
        name: 'Лекция 3',
        progress: 10,
      },
      {
        id: '4',
        name: 'Лекция 4',
        progress: 0,
      },
      {
        id: '5',
        name: 'Лекция 5',
        progress: 0,
      },
      {
        id: '6',
        name: 'Лекция 6',
        progress: 80,
      },
    ]
  }
)
