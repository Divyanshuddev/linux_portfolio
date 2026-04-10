import { combineReducers, configureStore } from '@reduxjs/toolkit'
import statusBarPanelSlice from '../features/StatusBarPanel/StatusBarPanelSlice'
import windowSlice from '../features/WindowSlice/WindowSlice'
const rootReducer = combineReducers({
  statusbarpanel:statusBarPanelSlice,
  window:windowSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch