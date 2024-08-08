import { configureStore } from '@reduxjs/toolkit'
import 公共模块 from './common'

const store = configureStore({
  reducer: {
    common: 公共模块,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
