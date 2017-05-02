import Ember from 'ember';
import LayoutClassesMixin from 'ember-3d-folding-panel/mixins/layout-classes';
import { module, test } from 'qunit';

module('Unit | Mixin | layout classes');

// Replace this with your real tests.
test('it works', function(assert) {
  let LayoutClassesObject = Ember.Object.extend(LayoutClassesMixin);
  let subject = LayoutClassesObject.create();
  assert.ok(subject);
});
