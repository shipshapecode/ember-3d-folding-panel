import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  tagName: 'a',
  classNameBindings: [':close-button'],
  panel: inject.service(),
  click() {
    this.get('panel').toggleContent('', false);
  }
});
