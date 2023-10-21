'use client'
import style from './style.module.css'

import ruLocale from '@fullcalendar/core/locales/ru'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal } from 'shared/ui/modal'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  Button,
  Input,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { LessonData } from 'shared/api/models'
import { Close } from '@mui/icons-material'
import { DateSelectArg } from '@fullcalendar/core/index.js'
import { dateStrToWeekDay, useAppDispatch } from 'shared/lib'
import { useEffect, useState } from 'react'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleModel } from '..'

export function Schedule() {
  const dispatch = useAppDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const events = useSelector(scheduleModel.selectors.events)
  const [range, setRange] = useState<DateSelectArg>(
    {} as DateSelectArg
  )
  useEffect(() => {
    dispatch(scheduleModel.operations.getEvents())
  }, [])
  return (
    <>
      <FullCalendar
        height={'85vh'}
        locale={ruLocale}
        timeZone={'Europe/Moscow'}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView={'timeGridWeek'}
        weekends={false}
        editable={true}
        selectable={true}
        select={e => {
          setRange(e)
          setModalOpen(true)
        }}
        eventDrop={e => {
          console.log(e)
        }}
        eventResize={e => {
          console.log(e)
        }}
        headerToolbar={{
          start: '',
          center: 'title',
        }}
        // eventContent={arg => {
        //   console.log(arg.event)
        //   return <h1>COntent</h1>
        // }}
        events={
          // events
          [
            {
              title: 'event 1',
              start: '2023-10-17T12:00:00',
              end: '2023-10-17T18:00:00',
              url: 'https://ya.ru',
            },
            {
              title: 'event 1',
              start: '2023-10-18T08:00:00',
              end: '2023-10-18T18:00:00',
              url: 'https://ya.ru',
            },
          ]
        }
      />
      {isModalOpen ? (
        <NewEvent
          range={range}
          close={() => {
            setModalOpen(false)
          }}
        />
      ) : null}
    </>
  )
}

function NewEvent(props: {
  range: DateSelectArg
  close: () => void
}) {
  const dispatch = useDispatch()

  const { control, handleSubmit } = useForm<LessonData>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<LessonData> = async data => {
    console.log(data)
    console.log({
      ...data,
    })
  }
  const dateStart = new Date(props.range.startStr)
  const dateEnd = new Date(props.range.endStr)

  const day = dateStrToWeekDay(dateStart)

  return (
    <Modal>
      <div className={style.modal}>
        <div className={style.container}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h2>Создание занятия</h2>
            <Close onClick={props.close} />
          </div>
          <form
            className={style.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name='group'
              control={control}
              defaultValue={'Т-01'}
              render={({ field }) => (
                <TextField
                  label={'Группа'}
                  defaultValue={'Т-01'}
                  placeholder='Группа'
                  {...field}
                />
              )}
            />
            <Controller
              name='discipline'
              control={control}
              render={({ field }) => (
                <TextField
                  label={'Дисциплина'}
                  placeholder='Дисциплина'
                  {...field}
                />
              )}
            />
            <Controller
              name='day'
              control={control}
              defaultValue={day}
              render={({ field }) => (
                <TextField
                  {...field}
                  defaultValue={day}
                  label={'День недели'}
                  select
                >
                  <MenuItem value={'MONDAY'}>Понедельник</MenuItem>
                  <MenuItem value={'TUESDAY'}>Вторник</MenuItem>
                  <MenuItem value={'WEDNESDAY'}>Среда</MenuItem>
                  <MenuItem value={'THURSDAY'}>Четверг</MenuItem>
                  <MenuItem value={'FRIDAY'}>Пятница</MenuItem>
                </TextField>
              )}
            />
            <Controller
              name='location'
              control={control}
              render={({ field }) => (
                <TextField
                  label={'Место проведения'}
                  placeholder='Место проведения'
                  {...field}
                />
              )}
            />
            <Controller
              name='locationType'
              control={control}
              defaultValue={'REMOTE'}
              render={({ field }) => (
                <TextField
                  {...field}
                  defaultValue={'REMOTE'}
                  select
                  label={'Формат занятия'}
                >
                  <MenuItem value={'LOCAL'}>Очно</MenuItem>
                  <MenuItem value={'REMOTE'}>Дистанционно</MenuItem>
                </TextField>
              )}
            />
            <Controller
              name='dateStart'
              control={control}
              render={({ field }) => (
                <DatePicker
                  label={'Дата начала занятий'}
                  {...field}
                />
              )}
            />
            <Controller
              name='dateFinish'
              control={control}
              render={({ field }) => (
                <DatePicker
                  label={'Дата окончания занятий'}
                  {...field}
                />
              )}
            />
            <Controller
              name='timeStart'
              control={control}
              render={({ field }) => (
                <TimePicker
                  // defaultValue={dateStart.getTime()}
                  label={'Время начала занятий'}
                  {...field}
                />
              )}
            />
            <Controller
              name='timeFinish'
              control={control}
              render={({ field }) => (
                <TimePicker
                  // defaultValue={dateEnd.getTime()}
                  label={'Время окончания занятий'}
                  {...field}
                />
              )}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button type={'submit'} variant='outlined'>
                Создать
              </Button>
              <Button
                type={'submit'}
                variant='outlined'
                color='warning'
                onClick={props.close}
              >
                Отмена
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
