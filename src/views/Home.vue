<template>
  <div class="home">
    <Menu></Menu>
    <Middle></Middle>
    <RightCont></RightCont>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import Middle from '@/components/Middle.vue'
  import RightCont from '@/components/RightCont.vue'
  export default {
    name: 'Home',
    components: {
      Menu, Middle, RightCont
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="less">
.home{
  width: 100vw;
  height: calc(100vh - 60px);
  background: #F5F7FA;
  display: flex;
  justify-content: space-between;
}
</style>