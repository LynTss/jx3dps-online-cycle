import React, { useMemo } from 'react'
import 背景图 from './背景图'
import './index.css'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  // 丛长度为N的数组中随机取一个值
  const 获取数组中的随机数 = (arr, n) => {
    const randomIndex = Math.floor(Math.random() * n)
    return arr[randomIndex] || ''
  }

  const 背景图展示 = useMemo(() => {
    return 获取数组中的随机数(背景图, 背景图?.length)
  }, [背景图])

  return (
    <div className='layout'>
      <div className='layout-wrapper'>{children}</div>
      {背景图展示 ? <img className='layout-bg' src={背景图展示} alt='' /> : null}
    </div>
  )
}

export default Layout
