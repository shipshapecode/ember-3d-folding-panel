import Ember from 'ember';
import layout from './template';
const { Component, computed: { alias }, inject: { service } } = Ember;

export default Component.extend({
  panel: service(),
  layout,
  selected: alias('panel.selected')
});
