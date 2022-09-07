<script lang="ts">

import { defineComponent } from 'vue'

import LeftBar from '@/components/LeftBar.vue';
import AppBar from '@/components/AppBar.vue';

export default defineComponent({
    name: "AuthLayout",
    setup() {
    },
    components: { LeftBar, AppBar }
})

</script>

<template>
    <left-bar />
    <el-container>
        <el-header height="48">
            <app-bar />
        </el-header>
        <el-main  style="-webkit-app-region: no-drag"><router-view></router-view></el-main>
        <!-- <el-footer></el-footer> -->
    </el-container>
</template>

<style scoped>
/* :deep.el-header {
    background: green;
} */
</style>