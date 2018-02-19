import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item square', function(hooks) {
  setupRenderingTest(hooks);

  test('item renders correctly', async function(assert) {
    this.set('item', {
      heading: 'Heading Test',
      subheading: 'Subheading Test'
    });

    await render(hbs`{{item-square item=item}}`);

    assert.equal(find('h2').textContent.trim(), 'Heading Test');
    assert.equal(find('p').textContent.trim(), 'Subheading Test');

    // Template block usage:
    await render(hbs`
      {{#item-square item=item}}
        template block text
      {{/item-square}}
    `);

    const text = String(find('.item-square').textContent.trim());
    assert.ok(text.startsWith('template block text'));
    assert.ok(text.includes('Heading Test'));
    assert.ok(text.includes('Subheading Test'));
    assert.ok(text.endsWith('View More'));
  });
});