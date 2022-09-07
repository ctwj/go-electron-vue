import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { store, key } from './store'

import router from './routers/router'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// vuex
app.use(store, key)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
    .use(ElementPlus, {zIndex: 3000, size: 'small'}).
    mount('#app')
