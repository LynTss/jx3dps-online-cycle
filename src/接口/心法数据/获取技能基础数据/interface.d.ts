// 本文件写接口的入参出参定义

// 例：
// params
export interface 获取技能数据入参 {
  /**
   * @name 心法ID
   * @default
   * @description 查询的心法ID
   */
  心法ID: string
}

// result
export interface 技能数据类型 {
  /**
   * @name 技能ID
   * @default
   */
  技能ID: string
  /**
   * @name 技能等级
   * @default 1
   */
  技能等级: number
  /**
   * @name 生效层数
   * @default 1
   */
  生效层数: number
}
