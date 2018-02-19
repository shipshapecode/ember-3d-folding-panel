import { run } from '@ember/runloop';
import { visit, click, find, findAll } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic functionality', function(hooks) {
  setupApplicationTest(hooks);

  test('Clicking opens/closes the panel', async function(assert) {
    assert.expect(4);

    const done = assert.async();

    await visit('/');

    // Open the panel
    await click(findAll('.item-square')[0]);

    run.later(async function() {
      assert.equal(find('.fold-content h2').textContent.trim(), 'Client 1', 'Heading is correct');
      assert.equal(find('.fold-content p').textContent.trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
      assert.ok(find('.main-container').classList.contains('fold-is-open'), 'main-container has fold-is-open class');

      // Close the panel
      await click('.gallery');

      assert.ok(!find('.main-container').classList.contains('fold-is-open'), 'main-container does not have fold-is-open class');
      done();
    }, 200);
  });

  test('Close button closes the panel', async function(assert) {
    assert.expect(4);

    const done = assert.async();

    await visit('/');

    // Open the panel
    await click(findAll('.item-square')[0]);

    run.later(async function() {
      assert.equal(find('.fold-content h2').textContent.trim(), 'Client 1', 'Heading is correct');
      assert.equal(find('.fold-content p').textContent.trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
      assert.ok(find('.main-container').classList.contains('fold-is-open'), 'main-container has fold-is-open class');

      // Close the panel
      await click('.close-button');

      assert.ok(!find('.main-container').classList.contains('fold-is-open'), 'main-container does not have fold-is-open class');
      done();
    }, 200);
  });
});
