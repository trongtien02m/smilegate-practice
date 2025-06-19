import { ref } from 'vue';
import { defineStore } from 'pinia';

import landscape from '@/assets/landscape.webp';
import portrait from '@/assets/portrait.webp';

import { generateLoremp } from '@/helpers/utilities';

import type { Photo } from '@/types/photo';

export const usePhotoStore = defineStore('gallery', () => {
  const isLoading = ref<boolean>(false);
  const photoCount = ref<number>(48);
  const photos = ref<Photo[]>([]);

  const fetchPhotos = async () => {
    isLoading.value = true;

    const waitingTime = !photos.value.length ? 1200 : 300;

    await new Promise((resolve) => setTimeout(resolve, waitingTime));

    for (let i = 0; i < 12; i++) {
      const src = Math.random() < 0.5 ? landscape : portrait;
      photos.value.push({
        id: i,
        src,
        title: generateLoremp(),
      });
    }

    isLoading.value = false;
  };

  return { photos, photoCount, fetchPhotos };
});
