import { click, find, findAll, visit } from 'ember-native-dom-helpers';
import Ember from  'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
const { run } = Ember;

moduleForAcceptance('Acceptance | basic functionality');

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

  run.later(function() {
    assert.equal(find('.fold-content h2').textContent.trim(), 'Client 1', 'Heading is correct');
    assert.equal(find('.fold-content p').textContent.trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
    assert.ok(find('.main-container').classList.contains('fold-is-open'), 'main-container has fold-is-open class');

    // Close the panel
    click('.close-button');

    assert.ok(!find('.main-container').classList.contains('fold-is-open'), 'main-container does not have fold-is-open class');
    done();
  }, 200);
});
