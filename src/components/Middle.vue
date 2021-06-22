<template>
  <div class="middle">
    <img src="@/assets/components/header.svg" alt="" />
    
    <div class="draggable">
      <draggable
        v-model="showList"
        chosenClass="chosen"
        forceFallback="true"
        group="people"
        animation="1000"
        @end="handleDragEnd"
      >
        <transition-group>
          <div class="draggable_item" v-for="item in showList" :key="item.sort">
            <p>{{item.options.title}}</p>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(element,index) in item.options.image" :key="index">
                        <img :src="element.imageUrl" alt="" class="img" />
                    </div>
                </div>
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from 'swiper';
import draggable from 'vuedraggable'
export default {
  name: "Middle",
  computed: {
    showList: {
        get() {
            return this.$store.state.showList
        },
        set(val) {
            this.$store.commit('UPDATE_MIDDLE_LIST_SORT',val)
        }
    }
  },
  components:{
      draggable
  },
  data() {
    return {
    }
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
    })
  },
  methods: {
      handleDragEnd(e) {
          console.log(this.showList);

      }
  }
};
</script>

<style lang="less" scoped>
@import url("../style/components/middle.less");
</style>