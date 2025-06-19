<template>
  <Header />
  <div class="px-5 md:px-10">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>
