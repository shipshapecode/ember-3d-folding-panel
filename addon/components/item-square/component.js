import $ from 'jquery';
import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';
import LayoutClasses from '../../mixins/layout-classes';

export default Component.extend(LayoutClasses, {
  layoutService: service('device/layout'),
  panel: service(),
  layout,
  tagName: 'centered',
  classNames: ['item-square', 'col-xs-12', 'col-lg-6'],
  click(event) {
    event.preventDefault();
    this.set('panel.selected', this.get('item'));
    this.openItemInfo();
  },
  openItemInfo() {
    const gallery = $('.gallery');
    const galleryOffsetTop = gallery.offset().top;
    let scrollTop = null;

    if (this.get('layoutService.isAtLeastTablet')) {
      /* if content is visible above the .gallery - scroll before opening the folding panel */
      if (galleryOffsetTop > $(window).scrollTop()) {
        scrollTop = galleryOffsetTop;
      } else if (galleryOffsetTop + gallery.height() < $(window).scrollTop() + $(window).height()) {
        /* if content is visible below the .gallery - scroll before opening the folding panel */
        scrollTop = galleryOffsetTop + gallery.height() - $(window).height();
      }
    }
    if (scrollTop) {
      $('body,html').animate({ scrollTop }, 100, () => {
        this.get('panel').toggleContent(true);
      });
    } else {
      this.get('panel').toggleContent(true);
    }
  }
});
