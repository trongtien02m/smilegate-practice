import { ref } from 'vue';

export function useNavigation() {
  const navItems = ref([
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/',
    },
  ]);
  return { navItems };
}
