import { combineReducers, configureStore } from '@reduxjs/toolkit'
import statusBarPanelSlice from '../features/StatusBarPanel/StatusBarPanelSlice'
import windowSlice from '../features/WindowSlice/WindowSlice'
import windowResizeSlice from '../features/WindowSlice/ResizeWindowSlice'
import projectSlice from '../features/ProjectSlice/ProjectSlice'
import mediaSlice from '../features/WindowSlice/MediaSlice'
const rootReducer = combineReducers({
  statusbarpanel:statusBarPanelSlice,
  window:windowSlice,
  windowresize:windowResizeSlice,
  projects:projectSlice,
  media:mediaSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch