import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  panel: service(),
  tagName: 'a',
  classNames: ['close-button'],
  click() {
    this.get('panel').toggleContent(false);
  }
});
