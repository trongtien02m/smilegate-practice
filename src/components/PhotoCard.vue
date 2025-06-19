<template>
  <div class="card">
    <div class="photo-image">
      <img
        :src="photo.src"
        :alt="photo.alt"
        class="img-cover"
        loading="lazy"
        @load="onImageLoaded"
        :style="{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.1s ease-in' }"
      />
    </div>
    <div class="photo-title p-4 text-primary flex justify-center" :title="photo.title">
      {{ photo.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Photo } from '@/types/photo';
import { ref } from 'vue';

defineProps<{
  photo: Photo;
}>();

const imageLoaded = ref<boolean>(false);

const onImageLoaded = () => {
  imageLoaded.value = true;
};
</script>

<style lang="scss" scoped>
@use '@/styles/components/photo.scss' as *;

.card {
  &:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);

    .photo-image img {
      transform: scale(1.1) rotateZ(1deg);
    }
  }
}
</style>
