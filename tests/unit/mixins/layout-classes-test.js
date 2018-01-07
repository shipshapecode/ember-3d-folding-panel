import EmberObject from '@ember/object';
import LayoutClassesMixin from 'ember-3d-folding-panel/mixins/layout-classes';
import { module, test } from 'qunit';

module('Unit | Mixin | layout classes', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    const LayoutClassesObject = EmberObject.extend(LayoutClassesMixin);
    const subject = LayoutClassesObject.create();
    assert.ok(subject);
  });
});