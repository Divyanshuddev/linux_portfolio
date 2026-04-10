import { combineReducers, configureStore } from '@reduxjs/toolkit'
import statusBarPanelSlice from '../features/StatusBarPanel/StatusBarPanelSlice'
const rootReducer = combineReducers({
  statusbarpanel:statusBarPanelSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch