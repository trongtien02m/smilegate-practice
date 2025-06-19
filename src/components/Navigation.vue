<template>
  <nav>
    <RouterLink
      v-for="item in navItems"
      :key="item.name"
      :to="item.link"
      class="navigation-item bg-secondary text-primary rounded-full px-5 py-2 cursor-pointer"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation';

const { navItems } = useNavigation();
</script>
<style scoped lang="scss">
.navigation-item {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: currentColor;
    transition:
      border 0.3s ease,
      box-shadow 0.3s ease;
  }

  &:hover {
    box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.5);
  }
}
</style>
