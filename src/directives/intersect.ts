// intersect.ts

import type { Directive } from 'vue';

interface ExtendedHTMLElement extends HTMLElement {
  __observer__?: IntersectionObserver;
  __initialCheckDone__?: boolean;
  __hasBeenHidden__?: boolean;
}

const intersectDirective: Directive<ExtendedHTMLElement, (isVisible: boolean) => void> = {
  mounted(el, binding) {
    const callback = binding.value;

    if (typeof callback !== 'function') {
      console.warn('v-intersect directive expects a function as its value.');
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    el.__initialCheckDone__ = false;
    el.__hasBeenHidden__ = false;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!el.__initialCheckDone__) {
        el.__initialCheckDone__ = true;
        if (entry.isIntersecting) {
          el.__hasBeenHidden__ = false;
        } else {
          el.__hasBeenHidden__ = true;
        }
        return;
      }

      if (entry.isIntersecting) {
        if (el.__hasBeenHidden__) {
          callback(true);
          el.__hasBeenHidden__ = false;
        }
      } else {
        el.__hasBeenHidden__ = true;
      }
    }, options);

    observer.observe(el);
    el.__observer__ = observer;
  },

  unmounted(el) {
    if (el.__observer__) {
      el.__observer__.disconnect();
      delete el.__observer__;
    }
    delete el.__initialCheckDone__;
    delete el.__hasBeenHidden__;
  },
};

export default intersectDirective;
