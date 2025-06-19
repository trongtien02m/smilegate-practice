import { ref } from 'vue';

const breakpoints = {
  sm: '640',
  md: '768',
  lg: '1024',
  xl: '1280',
};

const mediaSmQueryList = window.matchMedia(`(min-width: ${breakpoints.sm}px)`);
const mediaMdQueryList = window.matchMedia(`(min-width: ${breakpoints.md}px)`);

const isSmAndUp = ref(mediaSmQueryList.matches);
const isMdAndUp = ref(mediaMdQueryList.matches);

mediaSmQueryList?.addEventListener('change', (e) => {
  isSmAndUp.value = e.matches;
});

mediaMdQueryList?.addEventListener('change', (e) => {
  isMdAndUp.value = e.matches;
});

export function useScreenSize() {
  return {
    isSmAndUp,
    isMdAndUp,
  };
}
