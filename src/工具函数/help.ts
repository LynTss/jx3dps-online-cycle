/**
 * @name 基础算法函数工具
 * @description 基础JS相关功能算法，无业务属性
 */
export const INT = (val) => Math.floor(val)

export const 获取页面参数 = (param) => {
  if (window && window?.location?.search) {
    const urlParams = new URLSearchParams(window?.location?.search)
    return urlParams.get(param)
  }
  return ''
}

export const 去除对象中的无效值 = (obj) => {
  const newObj: any = {}
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== null && obj[prop] !== undefined) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}
