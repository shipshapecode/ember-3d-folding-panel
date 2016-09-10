import Ember from 'ember';
import layout from './template';
import { alias } from 'ember-computed-decorators';
const { Component, inject } = Ember;

export default Component.extend({
  layout,
  panel: inject.service(),
  @alias('panel.selected') selected: null
});
