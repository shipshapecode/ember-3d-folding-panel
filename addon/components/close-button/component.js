import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  panel: service(),
  tagName: 'a',
  classNames: ['close-button'],
  click() {
    get(this, 'panel').toggleContent(false);
  }
});
