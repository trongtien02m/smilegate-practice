<template>
  <div>
    <div class="py-5 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <template v-if="photos.length">
        <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
        <div v-if="photos.length < photoCount" v-intersect="loadMore" style="height: 1px"></div>
      </template>
      <template v-else>
        <PhotoCardSkeleton v-for="i in 8" :key="i" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { usePhotoStore } from '@/stores/photo';
import vIntersect from '@/directives/intersect';

import PhotoCard from '@/components/PhotoCard.vue';
import PhotoCardSkeleton from '@/components/PhotoCardSkeleton.vue';

const { photos, photoCount, fetchPhotos } = usePhotoStore();

const loadMore = () => {
  fetchPhotos();
};

onBeforeMount(() => {
  fetchPhotos();
});
</script>
