<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import MobileSearchBar from './MobileSearchBar.vue';
</script>

<template>
  <Sidebar></Sidebar>
  <Header></Header>
  <MobileSearchBar></MobileSearchBar>
  <router-view></router-view>
</template>

<style scoped>

</style>