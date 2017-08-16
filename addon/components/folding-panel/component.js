import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from './template';
import LayoutClasses from '../../mixins/layout-classes';

export default Component.extend(LayoutClasses, {
  panel: service(),
  layout,
  classNames: ['folding-panel'],
  classNameBindings: ['panel.foldIsOpen:is-open'],
  selected: alias('panel.selected')
});
