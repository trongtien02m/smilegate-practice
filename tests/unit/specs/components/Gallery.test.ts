import { vi, describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { shallowMount } from '@vue/test-utils';
import { usePhotoStore } from '@/stores/photo';
import Gallery from '@/components/Gallery.vue';
import PhotoCard from '@/components/PhotoCard.vue';

vi.mock('@/directives/intersect', () => ({
  default: vi.fn(),
}));

describe('Gallery.vue', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = usePhotoStore();

    store.fetchPhotos = vi.fn();

    store.photos = [
      {
        id: 1,
        src: 'src1',
        title: 'title1',
      },
    ];
  });

  it('renders the correct number of photo cards', () => {
    const wrapper = shallowMount(Gallery);
    expect(wrapper.findAllComponents(PhotoCard)).toHaveLength(1);
  });
});
