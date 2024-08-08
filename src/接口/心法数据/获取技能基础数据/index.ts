import { 获取技能数据入参, 技能数据类型 } from './interface'

// demo
const 获取技能数据 = (入参: 获取技能数据入参): 技能数据类型 => {
  const demoData: { [key: string]: 技能数据类型 } = {
    '123': {
      技能ID: '123',
      技能等级: 1,
      生效层数: 1,
    },
  }
  return demoData?.[入参?.心法ID]
}

export default 获取技能数据
