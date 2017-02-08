import $ from 'jquery';
import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';

export default Component.extend({
  layoutService: service('device/layout'),
  panel: service(),
  layout,
  tagName: 'li',
  classNameBindings: [':item-square'],
  click(event) {
    event.preventDefault();
    this.set('panel.selected', this.get('item'));
    this.openItemInfo();
  },
  openItemInfo() {
    const gallery = $('.gallery');
    if (gallery.offset().top > $(window).scrollTop() && this.get('layoutService.isAtLeastTablet')) {
      /* if content is visible above the .gallery - scroll before opening the folding panel */
      $('body,html').animate({
        'scrollTop': gallery.offset().top
      }, 100, () => {
        this.get('panel').toggleContent(true);
      });
    } else if (gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height() && this.get('layoutService.isAtLeastTablet')) {
      /* if content is visible below the .gallery - scroll before opening the folding panel */
      $('body,html').animate({
        'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
      }, 100, () => {
        this.get('panel').toggleContent(true);
      });
    } else {
      this.get('panel').toggleContent(true);
    }
  }
});
