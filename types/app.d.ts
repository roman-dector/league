/// <reference types="react-scripts" />

type RootState = import('app/_providers/store.tsx').RootState
type AppDispatch = import('app/_providers/store.tsx').AppDispatch
// type AppThunkDispatch = import('shared/lib').AppThunkDispatch

interface Window {
  __store__: any
}
