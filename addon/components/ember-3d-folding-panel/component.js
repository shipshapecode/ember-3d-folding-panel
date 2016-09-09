import Ember from 'ember';
import layout from './template';
const { $, Component, inject, run } = Ember;

export default Component.extend({
  layout,
  panel: inject.service(),
  didInsertElement() {
    run.scheduleOnce('afterRender', this, function() {
      let gallery = $('.cd-gallery');
      let foldingPanel = $('.folding-panel');
      let mainContent = $('.cd-main');

      /* close folding content */
      foldingPanel.on('click', '.close-button', (event) => {
        event.preventDefault();
        this.get('panel').toggleContent('', false);
      });
      gallery.on('click', (event) => {
        /* detect click on .cd-gallery::before when the .folding-panel is open */
        if ($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0) {
          this.get('panel').toggleContent('', false);
        }
      });
    });
  }
});
