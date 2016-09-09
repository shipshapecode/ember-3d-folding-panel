import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  tagName: 'a',
  classNameBindings: [':close-button']
});
