import { createAppThunk } from 'shared/lib'
import type { Preview } from 'shared/ui/preview'

export const getLessons = createAppThunk<Preview[], string>(
  'discipline/getLessons',
  async (data, thAPI) => {
    return [
      {
        id: '1',
        name: 'Дисциплина 1',
        progress: 20,
      },
      {
        id: '2',
        name: 'Дисциплина 2',
        progress: 40,
      },
      {
        id: '3',
        name: 'Дисциплина 3',
        progress: 10,
      },
      {
        id: '4',
        name: 'Дисциплина 4',
        progress: 0,
      },
      {
        id: '5',
        name: 'Дисциплина 5',
        progress: 0,
      },
      {
        id: '6',
        name: 'Дисциплина 6',
        progress: 80,
      },
    ]
  }
)
