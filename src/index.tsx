// 页面入口文件
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App as AntdApp, ConfigProvider } from 'antd'
import antdZhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import Layout from '@/页面/组件/Layout'
import store from '@/store/index'

import App from './页面/index'
import './style/base.css'

dayjs.locale('zh-cn')

// ConfigProvider.config({ theme: { primaryColor: 主题色 } })

const root = ReactDOM.createRoot(document.getElementById('root') as any)

root.render(
  <Provider store={store}>
    <ConfigProvider
      locale={antdZhCN}
      theme={
        {
          // token: {
          //   colorPrimary: 主题色,
          // },
        }
      }
    >
      <AntdApp>
        <Layout>
          <App />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  </Provider>
)
