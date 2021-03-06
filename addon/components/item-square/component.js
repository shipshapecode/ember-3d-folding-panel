import { get, set } from '@ember/object';
import { getScrollTop, scrollTo } from '../../utils';
import Component from '@ember/component';
import LayoutClasses from '../../mixins/layout-classes';
import layout from './template';
import { inject as service } from '@ember/service';

export default Component.extend(LayoutClasses, {
  layoutService: service('device/layout'),
  panel: service(),

  layout,
  tagName: 'centered',
  classNames: ['item-square', 'col-xs-12', 'col-lg-6'],

  click(event) {
    event.preventDefault();
    set(this, 'panel.selected', get(this, 'item'));
    this.openItemInfo();
  },

  openItemInfo() {
    const gallery = document.querySelector('.gallery');
    const galleryOffsetTop = gallery.getBoundingClientRect().top + getScrollTop();
    let scrollTop = null;

    if (get(this, 'layoutService.isAtLeastTablet')) {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const galleryHeight = parseInt(getComputedStyle(gallery).height, 10);

      /* if content is visible above the .gallery - scroll before opening the folding panel */
      if (galleryOffsetTop > getScrollTop()) {
        scrollTop = galleryOffsetTop;
      } else if (galleryOffsetTop + galleryHeight < getScrollTop() + windowHeight) {
        /* if content is visible below the .gallery - scroll before opening the folding panel */
        scrollTop = galleryOffsetTop + galleryHeight - windowHeight;
      }
    }

    if (scrollTop) {
      scrollTo(document.documentElement, scrollTop, 100, () => {
        get(this, 'panel').toggleContent(true);
      });
    } else {
      get(this, 'panel').toggleContent(true);
    }
  }
});
