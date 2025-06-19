import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { usePhotoStore } from '@/stores/photo';

vi.mock('@/assets/landscape.webp', () => ({ default: 'landscape.webp' }));
vi.mock('@/assets/portrait.webp', () => ({ default: 'portrait.webp' }));
vi.mock('@/helpers/utilities', () => ({
  generateLoremp: () => 'Random title',
}));

describe('photo store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should have default state', () => {
    const store = usePhotoStore();
    expect(store.photos).toBeDefined();
    expect(store.photoCount).toBe(48);
    expect(Array.isArray(store.photos)).toBe(true);
    expect(store.photos.length).toBe(0);
  });

  it('fetchPhotos adds 12 photos', async () => {
    const store = usePhotoStore();
    await store.fetchPhotos();
    expect(store.photos.length).toBe(12);
    store.photos.forEach((photo, idx) => {
      expect(photo).toHaveProperty('id', idx);
      expect(photo).toHaveProperty('src');
      expect(photo).toHaveProperty('title', 'Random title');
    });
  });

  it('fetchPhotos appends more photos if called again', async () => {
    const store = usePhotoStore();
    await store.fetchPhotos();
    await store.fetchPhotos();
    expect(store.photos.length).toBe(24);
  });
});
