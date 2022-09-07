<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Message, registerEvent } from "./utils/message";

export default defineComponent({
    setup() {
        const onAstilectronReady = () => {

            // 开始监听来自 go 的事件
            Message.startListen();
        };

        onMounted(() => {
            // 注册来自go的事件
            registerEvent();
            
            document.addEventListener("astilectron-ready", onAstilectronReady);
        });
    },
});
</script>