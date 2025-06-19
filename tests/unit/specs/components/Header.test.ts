import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { useScreenSize } from '@/composables/useScreenSize';
import Header from '@/components/Header.vue';

vi.mock('@/composables/useScreenSize', () => ({
  useScreenSize: vi.fn(),
}));

describe('Header.vue', () => {
  it('renders logo, name, and Navigation when isSmAndUp is true', () => {
    (useScreenSize as ReturnType<typeof vi.fn>).mockImplementationOnce(() => ({ isSmAndUp: true }));
    const wrapper = shallowMount(Header);
    expect(wrapper.find('img[alt="logo"]').exists()).toBe(true);
    expect(wrapper.text()).toContain('Tien Nguyen');
    expect(wrapper.findComponent({ name: 'Navigation' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'NavigationMobile' }).exists()).toBe(false);
  });

  it('renders NavigationMobile and hides name when isSmAndUp is false', async () => {
    (useScreenSize as ReturnType<typeof vi.fn>).mockImplementationOnce(() => ({
      isSmAndUp: false,
    }));

    const wrapper = shallowMount(Header);
    expect(wrapper.findComponent({ name: 'Navigation' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'NavigationMobile' }).exists()).toBe(true);
    expect(wrapper.text()).not.toContain('Tien Nguyen');
  });
});
