import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'
import { 公共模块类型 } from './interface'

const 默认值: 公共模块类型 = {
  测试数据: false,
}

export const 公共模块 = createSlice({
  name: 'common',
  initialState: 默认值,
  reducers: {
    更新测试数据: (state, action: PayloadAction<boolean>) => {
      state.测试数据 = action.payload
    },
  },
})

export const { 更新测试数据 } = 公共模块.actions // 导出操作state的喊出

export const DataState = (state: RootState) => state

export default 公共模块.reducer // 导出当前reducer在store/index.ts中记性全局挂
