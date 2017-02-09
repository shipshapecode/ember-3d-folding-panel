import Ember from 'ember';
import run from 'ember-runloop';
import Service from 'ember-service';
import service from 'ember-service/inject';
const { $ } = Ember;

export default Service.extend({
  layoutService: service('device/layout'),
  foldIsOpen: false,
  toggleContent(bool) {
    const mainContent = $('.main-container');
    if (bool) {
      // TODO set the content for the page before showing it
      $('body').addClass('overflow-hidden');
      run.join(() => {
        this.set('foldIsOpen', true);
      });
    } else {
      /* close the folding panel */
      run.join(() => {
        this.set('foldIsOpen', false);
      });

      // if on mobile, immediately remove the .overflow-hidden
      if (this.get('layoutService.isMobile')) {
        $('body').removeClass('overflow-hidden');
      } else {
        // if not mobile, wait for the end of the animation
        mainContent.find('.item-square').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
          () => {
            $('body').removeClass('overflow-hidden');
            mainContent.find('.item-square').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
          });
      }
    }
  }
});
