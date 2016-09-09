import Ember from 'ember';
import layout from './template';
const { $, Component, run } = Ember;

export default Component.extend({
  layout,
  openItemInfo() {
    let mq = this.viewportSize();
    let gallery = this.get('gallery');
    if (gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
    /* if content is visible above the .cd-gallery - scroll before opening the folding panel */
      $('body,html').animate({
        'scrollTop': gallery.offset().top
      }, 100, () => {
        this.toggleContent(true);
      });
    } else if (gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile') {
    /* if content is visible below the .cd-gallery - scroll before opening the folding panel */
      $('body,html').animate({
        'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
      }, 100, () => {
        this.toggleContent(true);
      });
    } else {
      this.toggleContent(true);
    }
  },
  toggleContent(bool) {
    let foldingPanel = this.get('foldingPanel');
    let mainContent = this.get('mainContent');
    if (bool) {
      // TODO set the content for the page before showing it
      $('body').addClass('overflow-hidden');
      foldingPanel.addClass('is-open');
      mainContent.addClass('fold-is-open');
    } else {
    /* close the folding panel */
      let mq = this.viewportSize();
      foldingPanel.removeClass('is-open');
      mainContent.removeClass('fold-is-open');

      (mq == 'mobile' || $('.no-csstransitions').length > 0)
    /* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
    ? $('body').removeClass('overflow-hidden')

    : mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      $('body').removeClass('overflow-hidden');
      mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    }

  },
  viewportSize() {
    /* retrieve the content value of .cd-main::before to check the actua mq */
    return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, '');
  },
  didInsertElement() {
    run.scheduleOnce('afterRender', this, function() {
      let gallery = $('.cd-gallery');
      this.set('gallery', gallery);
      let foldingPanel = $('.cd-folding-panel');
      this.set('foldingPanel', foldingPanel);
      let mainContent = $('.cd-main');
      this.set('mainContent', mainContent);
      /* open folding content */
      gallery.on('click', 'a', (event) => {
        event.preventDefault();
        // TODO pass clicked item in to grab data for page
        this.openItemInfo();
      });

      /* close folding content */
      foldingPanel.on('click', '.cd-close', (event) => {
        event.preventDefault();
        this.toggleContent('', false);
      });
      gallery.on('click', (event) => {
        /* detect click on .cd-gallery::before when the .cd-folding-panel is open */
        if ($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0) {
          this.toggleContent('', false);
        }
      });
    });
  }
});
