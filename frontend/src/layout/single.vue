<script lang="ts">

import { defineComponent } from 'vue'

import AppBar from '@/components/AppBar.vue';

export default defineComponent({
    name: "SingleLayout",
    setup() {
    },
    components: { AppBar }
})

</script>

<template>
    <app-bar />
    <router-view></router-view>
</template>