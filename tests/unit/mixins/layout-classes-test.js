import Ember from 'ember';
import LayoutClassesMixin from 'ember-3d-folding-panel/mixins/layout-classes';
import { module, test } from 'qunit';
const { Object: EmObj } = Ember;

module('Unit | Mixin | layout classes');

// Replace this with your real tests.
test('it works', function(assert) {
  const LayoutClassesObject = EmObj.extend(LayoutClassesMixin);
  const subject = LayoutClassesObject.create();
  assert.ok(subject);
});
