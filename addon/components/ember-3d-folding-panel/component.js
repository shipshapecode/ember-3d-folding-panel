import Ember from 'ember';
import layout from './template';
const { $, Component, inject, run } = Ember;

export default Component.extend({
  panel: inject.service(),
  layout,
  classNameBindings: [':main-container', 'panel.foldIsOpen:fold-is-open'],

  didInsertElement() {
    run.scheduleOnce('afterRender', this, function() {
      const gallery = $('.gallery');

      gallery.on('click', (event) => {
        /* detect click on .gallery::before when the .folding-panel is open */
        if ($(event.target).is('.gallery') && $('.fold-is-open').length > 0) {
          this.get('panel').toggleContent('', false);
        }
      });
    });
  }
});
