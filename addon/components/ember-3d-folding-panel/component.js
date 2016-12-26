import Ember from 'ember';
import layout from './template';
const { $, Component, inject } = Ember;

export default Component.extend({
  panel: inject.service(),
  layout,
  classNameBindings: [':main-container', 'panel.foldIsOpen:fold-is-open'],

  click(event) {
    /* detect click on .gallery::before when the .folding-panel is open */
    if ($(event.target).is('.gallery') && this.get('panel.foldIsOpen')) {
      this.get('panel').toggleContent('', false);
    }
  }
});
