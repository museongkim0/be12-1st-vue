<script setup>
// 컴포넌트 import
import AppPreloader from "/src/pages/common/AppPreloader.vue";
import PageWrapper from "/src/pages/common/PageWrapper.vue";
import Sidebar from "./pages/common/Sidebar.vue";
import Header from "./pages/common/Header.vue";
import MobileSearchBar from "./pages/common/MobileSearchBar.vue";
import InstDash from "./pages/instructor/InstDash.vue";
import Login from "./pages/user/login.vue";

</script>

<template>
  <!-- App preloader-->
  <div
    class="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900"
  >
    <div class="app-preloader-inner relative inline-block size-48"></div>
  </div>
  <div id="root" class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
