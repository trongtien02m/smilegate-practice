<template>
  <header class="relative flex justify-between items-center p-5 bg-primary">
    <div class="flex items-center">
      <RouterLink to="/">
        <img src="@/assets/logo.webp" alt="logo" class="mr-2 h-8 object-contain cursor-pointer" />
      </RouterLink>
      <span v-if="isSmAndUp" class="text-2xl text-secondary font-bold">Tien Nguyen</span>
    </div>
    <div>
      <Navigation class="flex gap-x-2" v-if="isSmAndUp" />
      <NavigationMobile v-else />
    </div>
  </header>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import NavigationMobile from '@/components/NavigationMobile.vue';
import { useScreenSize } from '@/composables/useScreenSize';

const { isSmAndUp } = useScreenSize();
</script>
