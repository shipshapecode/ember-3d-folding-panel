import { get, set } from '@ember/object';
import Service from '@ember/service';
import { oneTimeTransitionEvent } from '../utils';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Service.extend({
  layoutService: service('device/layout'),
  foldIsOpen: false,
  toggleContent(bool) {
    if (bool) {
      // TODO set the content for the page before showing it
      document.body.classList.add('overflow-hidden');
      run.join(() => {
        set(this, 'foldIsOpen', true);
      });
    } else {
      /* close the folding panel */
      run.join(() => {
        set(this, 'foldIsOpen', false);
      });

      // if on mobile, immediately remove the .overflow-hidden
      if (get(this, 'layoutService.isMobile')) {
        document.body.classList.remove('overflow-hidden');
      } else {
        // if not mobile, wait for the end of the animation
        const [itemSquare] = document.querySelectorAll('.item-square');

        oneTimeTransitionEvent(itemSquare, () => {
          document.body.classList.remove('overflow-hidden');
        });
      }
    }
  }
});
