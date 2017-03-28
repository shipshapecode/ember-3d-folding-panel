import { moduleFor, test } from 'ember-qunit';

moduleFor('service:panel', 'Unit | Service | panel', {
  needs: ['service:device/layout']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  const service = this.subject();
  assert.ok(service);
});
