import Ember from 'ember';
import layout from './template';
const { $, Component, inject } = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: [':item-square'],
  panel: inject.service(),
  click() {
    event.preventDefault();
    this.set('panel.selected', this.get('item'));
    this.openItemInfo();
  },
  openItemInfo() {
    let mq = this.get('panel').viewportSize();
    let gallery = $('.gallery');
    if (gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
    /* if content is visible above the .gallery - scroll before opening the folding panel */
      $('body,html').animate({
        'scrollTop': gallery.offset().top
      }, 100, () => {
        this.get('panel').toggleContent(true);
      });
    } else if (gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile') {
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
