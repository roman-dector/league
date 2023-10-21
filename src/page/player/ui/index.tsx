'use client'

import style from './style.module.css'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import { Header2 } from 'entities/header2'
import { useSelector } from 'react-redux'
import { disciplineModel } from 'entities/discipline'

export function PlayerPage({
  params,
}: {
  params: { disciplineId: string; lessonId: string }
}) {
  const disciplineTitle = useSelector(
    disciplineModel.selectors.disciplineTitle(params.disciplineId)
  )

  return (
    <>
      <Header2 disciplineTitle={disciplineTitle} groupId='123' />

      <main className={style.main}>
        <SideBar />
        <div>
          <Player src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
          <div>
            <h2>Материалы</h2>
          </div>
        </div>
      </main>
    </>
  )
}

function Player(props: { src: string }) {
  return (
    <video height={600} controls>
      <source src={props.src} type='video/mp4' />
    </video>
  )
}

function SideBar() {
  const [value, setValue] = useState('1')

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue)
  }

  return (
    <div className={style.list}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Tab label='Лекции' value='1' />
          <Tab label='Практики' value='2' />
        </TabList>
        <TabPanel value='1'>
          <LessonList />
        </TabPanel>
        <TabPanel value='2'>
          <PracticeList />
        </TabPanel>
      </TabContext>
    </div>
  )
}

function LessonList() {
  return <div></div>
}

function LessonItem() {}

function PracticeList() {
  return <div></div>
}
