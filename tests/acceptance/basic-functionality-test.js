import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic functionality');

test('Clicking opens/closes the panel', function(assert) {
  visit('/');

  // Open the panel
  click('.item-square:first');

  andThen(function() {
    assert.equal(find('.fold-content h2').text().trim(), 'Client 1', 'Heading is correct');
    assert.equal(find('.fold-content p').text().trim().substring(0, 20), 'Lorem ipsum dolor si', 'Subheading is correct');
    assert.ok(find('.main-container').hasClass('fold-is-open'), 'main-container has fold-is-open class');
  });

  // Close the panel
  click('.gallery');

  andThen(function() {
    assert.ok(!find('.main-container').hasClass('fold-is-open'), 'main-container does not have fold-is-open class');
  });
});
