import { config } from '@vue/test-utils';

config.global.stubs = {
  RouterLink: {
    template: '<a><slot /></a>',
  },
  RouterView: {
    template: '<div><slot /></div>',
  },
  Navigation: true,
  NavigationMobile: true,
};
