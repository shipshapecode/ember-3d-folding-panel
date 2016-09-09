import Ember from 'ember';
const { $, Service } = Ember;

export default Service.extend({
  toggleContent(bool) {
    let foldingPanel = $('.folding-panel');
    let mainContent = $('.cd-main');
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

    : mainContent.find('.item-square').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      $('body').removeClass('overflow-hidden');
      mainContent.find('.item-square').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    }
  },
  viewportSize() {
    /* retrieve the content value of .cd-main::before to check the actua mq */
    return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, '');
  }
});
