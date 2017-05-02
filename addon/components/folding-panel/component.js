import { alias } from 'ember-computed';
import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';

export default Component.extend({
  panel: service(),
  layout,
  selected: alias('panel.selected'),
  classNames: ['folding-panel'],
  classNameBindings: ['panel.foldIsOpen:is-open']
});
