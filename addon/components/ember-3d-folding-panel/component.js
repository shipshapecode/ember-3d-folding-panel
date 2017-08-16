import Component from '@ember/component';
import LayoutClasses from '../../mixins/layout-classes';
import { get } from '@ember/object';
import layout from './template';
import { inject as service } from '@ember/service';

export default Component.extend(LayoutClasses, {
  panel: service(),
  layout,
  classNames: ['main-container'],
  classNameBindings: ['panel.foldIsOpen:fold-is-open'],

  click(event) {
    /* detect click on .gallery::before when the .folding-panel is open */
    if (event.target.classList.contains('gallery') && get(this, 'panel.foldIsOpen')) {
      get(this, 'panel').toggleContent(false);
    }
  }
});
