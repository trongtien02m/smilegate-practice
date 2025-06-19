<template>
  <div>
    <button
      class="hamburger text-secondary text-3xl"
      :class="{ open: isMenuOpen }"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <transition name="fade">
      <nav
        class="navigation-mobile flex flex-col gap-y-2 absolute bg-secondary"
        v-show="isMenuOpen"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.link"
          class="text-primary text-right rounded-full px-5 py-2 cursor-pointer"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

const { navItems } = useNavigation();

const isMenuOpen = ref<boolean>(false);
</script>
<style scoped lang="scss">
.hamburger {
  background-color: transparent;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 60;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.15s ease;
  }

  &.open {
    span {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -8px);
      }
    }
  }
}

.navigation-mobile {
  z-index: 10;
  right: 0;
  top: 77px;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
