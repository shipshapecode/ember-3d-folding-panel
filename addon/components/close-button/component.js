import Ember from 'ember';
const { Component, inject } = Ember;

export default Component.extend({
  panel: inject.service(),
  tagName: 'a',
  classNameBindings: [':close-button'],
  click() {
    this.get('panel').toggleContent('', false);
  }
});
