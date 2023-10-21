import { compose } from '@reduxjs/toolkit'
import { withSession } from './session'
import { withStore } from './store'
import { withLocalization } from './localization'

export const withProviders = compose(
  withLocalization,
  withStore,
  withSession
)
