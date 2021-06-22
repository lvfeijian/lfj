import types from '@/store/types'
export default{
  [types.ADD_MIDDLE_LIST_DATA](state,val) {
    console.log(val,'22222');
    if(val.type == 'swiper') {
      state.showList = [...state.showList, 
        {
          sort: state.showList.length+1,
          title: '轮播图',
          options: {
            title: '',
            image: [
              {
                imageUrl: '',
                linkType: 0, // 0不跳转 1跳转链接
                linkUrl: null,
              },
              {
                imageUrl: '',
                linkType: 1, // 0不跳转 1跳转链接
                linkUrl: 'www.baidu.com',
              }
            ],
          }
        }
      ]
    }
    state.currentChooseModule = state.showList.length
  },
  [types.MODIFY_MIDDLE_LIST_SORT](state) {
  },
  [types.UPDATE_MIDDLE_LIST_SORT](state,val) {
    state.showList = val
    state.showList.map((item,index) => {
      item.sort = index+1
    })
  }

}