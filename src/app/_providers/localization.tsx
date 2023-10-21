'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { ruRU } from '@mui/x-date-pickers/locales'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FC } from 'react'

const russianLocale =
  ruRU.components.MuiLocalizationProvider.defaultProps.localeText

export function withLocalization(Component: FC<any>): FC<any> {
  return (props: any) => (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='en-gb'
      localeText={russianLocale}
    >
      {<Component {...props} />}
    </LocalizationProvider>
  )
}
