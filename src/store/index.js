import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 左侧模块
    menuList: [
      {
        name: "基础模块",
        list: [
          {
            id: 1,
            icon: "icon-lvhangshe",
            name: "轮播图",
            type: 'swiper'
          },
          {
            id: 2,
            icon: "icon-shelvqiye",
            name: "图文导航",
            type: 'banner'
          },
          {
            id: 3,
            icon: "icon-gonggongzuzhijigou",
            name: "关注栏",
            type: 'navbar'
          },
        ],
      },
    ],
    showList: [
      {
        sort: 1,
        title: '轮播图',
        options: {
          title: '123',
          image: [
            {
              imageUrl: 'https://static-1.vkaijiang.com/templates/k-main/common/images/default_cover/teacher_index.jpg',
              linkType: 0, // 0不跳转 1跳转链接
              linkUrl: null,
            },
            {
              imageUrl: '',
              linkType: 1, // 0不跳转 1跳转链接
              linkUrl: 'http://www.baidu.com',
            }
          ],
        }
      },
      {
        sort: 2,
        title: '轮播图',
        options: {
          title: '456',
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
    ],
    currentChooseModule: 1, // 当前选中的模块,从1开始
  },
  mutations,
  actions,
  modules: {
  }
})
