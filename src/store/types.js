const types = [
  'ADD_MIDDLE_LIST_DATA', // 添加中间模块的数据
  'MODIFY_MIDDLE_LIST_SORT', // 修改中间模块的顺序
  'UPDATE_MIDDLE_LIST_SORT', // 更新中间模块的顺序
]
const typesObj = {}
types.forEach(type => typesObj[type] = type)
export default typesObj