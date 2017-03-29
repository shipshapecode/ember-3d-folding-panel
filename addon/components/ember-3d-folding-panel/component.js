import $ from 'jquery';
import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';

export default Component.extend({
  panel: service(),
  layout,
  classNameBindings: [':main-container', 'panel.foldIsOpen:fold-is-open'],

  click(event) {
    /* detect click on .gallery::before when the .folding-panel is open */
    if ($(event.target).is('.gallery') && this.get('panel.foldIsOpen')) {
      this.get('panel').toggleContent(false);
    }
  }
});
