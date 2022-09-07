<template>
    <div id="appbar" class="appbar-container">
        <div class="appbar-left"></div>
        <div class="appbar-right" style="-webkit-app-region: no-drag">
            <div class="btn-container" @click="minWindow">
                <el-icon color="#409EFC"><SemiSelect /></el-icon>
            </div>
            <div class="btn-container btn-exit" @click="exit">
                <el-icon color="#409EFC"><CloseBold /></el-icon>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppBar",
    setup () {
        const exit = () => {
            // @ts-ignore
            astilectron.sendMessage({name:"exitWindow",payload:""}, function(message) {
                console.log("received " + message)
            });
        }
        const minWindow = () => {
            // @ts-ignore
            astilectron.sendMessage({name:"minWindow",payload:""})
        }
        return {
            exit,
            minWindow,
        }
    }
})
</script>

<style scoped>
.appbar-container {
    height: inherit;
    width: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.appbar-right {
    display: flex;
    margin: 4px 0;
}
.appbar-right {
    -webkit-app-region: no-drag;
}
.btn-container {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.btn-container:hover {
    background-color: var(--el-menu-item-hover-fill);
}
.btn-exit:hover {
    color: var(--el-color-error);
    background-color: var(--el-color-error-light-8);
}
</style>