import { TimetableItem } from 'shared/api/models'

export interface Event {
  title: string
  start: string
  end: string
  url?: string
}

export function convertTimetableDaysToEvents(
  items: TimetableItem[]
): Event[] {
  return items.map(d => {
    let event: Event = {
      title: JSON.stringify(d),
      start: `${d.date}T${d.timeStart}`,
      end: `${d.date}T${d.timeFinish}`,
    }
    if (d.locationType === 'REMOTE') {
      event.url = d.location
    }

    return event
  })
}
