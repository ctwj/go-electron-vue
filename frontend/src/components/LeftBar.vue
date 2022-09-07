<template>
  <div class="leftbar-container">
    <!-- 顶部Logo 和 菜单-->
    <el-space class="leftbar-header" :size="48" direction="vertical">
      <img
        style="width: 48px; height: 48px"
        src="../assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      />
      <div class="leftbar-header-menu">
        <router-link
          v-for="menu in menuList"
          :key="menu.label"
          :to="{name: menu.router}"
          class="leftbar-header-menu_item"
          :class="{active: menu.router === routeName}"
        >
          <el-icon>
            <component :is="menu.icon" :size="36"></component>
          </el-icon>
          <span class="leftbar-header-menu_item_label">{{ menu.label }}</span>
        </router-link>
      </div>
    </el-space>

    <!-- 底部退出按钮 -->
    <div class="leftbar-footer">
      <el-popover placement="right-end" trigger="hover">
        <template #reference>
          <el-icon :size="24" color="white">
            <Operation />
          </el-icon>
        </template>
        <template #default>
          <el-menu
            class="el-menu-vertical-demo"
            @open="() => {}"
            @close="() => {}"
          >
            <el-menu-item index="1">
              <el-icon><SwitchButton /></el-icon>
              <span>Exit</span>
            </el-menu-item>
          </el-menu>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "LeftBar",
  setup() {
    const routeName = ref('home');
    const route = useRoute();
    watch(
      () => route.name,
      async (newName) => {
        routeName.value = newName as string ?? 'home';
        console.log(newName);
      }
    );
    return {
      routeName,
      menuList: [
        {
          icon: "VideoCamera",
          label: "视频创作",
          router: "home",
        },
        {
          icon: "VideoCameraFilled",
          label: "方案管理",
          router: "schema",
        },
        {
          icon: "Setting",
          label: "系统设置",
          router: "",
        },
      ],
    };
  },
});
</script>

<style scoped>
.leftbar-container {
  width: 88px;
  height: 100%;
  padding: 16px 0px;

  background-color: var(--el-color-primary-dark-2);
  box-sizing: border-box;
  user-select: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.leftbar-header {
  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leftbar-header-menu {
  width: 88px;
  display: flex;
  flex-direction: column;
}
.leftbar-header-menu_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
  text-decoration:none;

  height: 68px;
  width: 100%;
  background-color: var(--el-color-primary-dark-2);
  color: var(--el-color-primary-light-9)
}
.leftbar-header-menu_item.active {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-color-primary-dark-2);
}
.leftbar-header-menu_item:hover {
  background-color: var(--el-color-primary-light-3);
  color: var(--el-color-primary-dark-2);
}
</style>