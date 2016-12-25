import Ember from 'ember';
import layout from './template';
const { Component, computed: { alias }, inject } = Ember;

export default Component.extend({
  panel: inject.service(),
  layout,
  selected: alias('panel.selected')
});
