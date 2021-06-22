<template>
    <div class="right_cont">
        
        <div v-for="(item,index) in showList" :key="index">
            <div v-if="index + 1 == currentChooseModule">
                {{item.title}}
                <input type="text" :value="item.options.title">
            </div>
            
        </div>
    </div>
</template>

<script>
import types from "@/store/types";
import { mapState } from "vuex";
    export default {
        name: 'RightCont',
        computed: {
            ...mapState(["showList", "currentChooseModule"]),
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
@import url('../style/components/rightCont.less');
</style>