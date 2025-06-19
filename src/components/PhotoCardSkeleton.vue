<template>
  <div class="card skeleton">
    <div class="photo-image skeleton__image" />
    <div class="flex justify-center p-4">
      <div class="photo-title skeleton__text skeleton__text--lg" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/styles/components/photo.scss' as *;

.skeleton {
  animation: pulse 1.5s ease-in-out infinite;

  &__image {
    background: #e0e0e0;
  }

  &__text {
    height: 12px;
    background: #e0e0e0;
    border-radius: 4px;
    &--lg {
      width: 80%;
    }
  }
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
