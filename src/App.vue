<script setup lang="ts">
import MainNews from './components/MainNews.vue'
import NewsList from './components/NewsList.vue'
import Layout from './layouts/default.vue'

</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <Layout />

    <MainNews />

    <!-- news list 2-->
    <NewsList />
  </div>
</template>

<style scoped></style>
