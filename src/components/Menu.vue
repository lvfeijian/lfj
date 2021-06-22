<template>
  <div class="menu">
    <div class="menu_cont" v-for="(item, index) in menuList" :key="index">
      <div class="menu_module">
        <p>{{ item.name }}</p>
        <div class="menu_list">
          <div class="menu_list_li" v-for="(val, key) in item.list" :key="key">
            <span class="iconfont" :class="val.icon" @click="setModule(val)"></span>
            <p>{{ val.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import types from "@/store/types";
import { mapState } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapState(["menuList"]),
  },
  data() {
    return {};
  },
  methods: {
    setModule(val) {
        this.$store.commit(types.ADD_MIDDLE_LIST_DATA,val)
      //   this.$store.commit(types.)
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../style/components/menu.less");
</style>