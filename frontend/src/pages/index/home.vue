<script lang="ts">

import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { Message, createMessage } from '@/utils/message';
import { MessageData } from '@/utils/types';

export default defineComponent({
    setup() {
      const store = useStore();
      const version = computed(() => store.getters['version'])
      const count = computed(() => store.getters['test/count'])
      const add = () => {
          store.commit('test/ADD_COUNT');
          Message.send(createMessage('hello'), function(message: MessageData) {
              console.log("received " + message.payload)
          });
      }
      return {
        version,
        count,
        add,
      }
    }
})

</script>

<template>
  <span>Home</span>
  <div>
    <span>count: {{ count }}</span><br>
    <span>version: {{ version }}</span>
  </div>
  <el-button @click="add">Add</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
