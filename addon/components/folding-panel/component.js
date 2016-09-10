import Ember from 'ember';
import layout from './template';
const { Component, computed: { alias }, inject } = Ember;

export default Component.extend({
  layout,
  panel: inject.service(),
  selected: alias('panel.selected')
});
