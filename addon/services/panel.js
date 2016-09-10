import Ember from 'ember';
const { $, Service } = Ember;

export default Service.extend({
  toggleContent(bool) {
    let foldingPanel = $('.folding-panel');
    let mainContent = $('.main-container');
    if (bool) {
      // TODO set the content for the page before showing it
      $('body').addClass('overflow-hidden');
      foldingPanel.addClass('is-open');
      this.set('foldIsOpen', true);
    } else {
    /* close the folding panel */
      let mq = this.viewportSize();
      foldingPanel.removeClass('is-open');
      this.set('foldIsOpen', false);

      (mq == 'mobile' || $('.no-csstransitions').length > 0)
    /* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
    ? $('body').removeClass('overflow-hidden')

    : mainContent.find('.item-square').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      $('body').removeClass('overflow-hidden');
      mainContent.find('.item-square').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    }
  },
  viewportSize() {
    /* retrieve the content value of .main-container::before to check the actua mq */
    return window && window.getComputedStyle(document.querySelector('.main-container'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, '');
  }
});
