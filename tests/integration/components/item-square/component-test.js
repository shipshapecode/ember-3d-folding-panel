import { moduleForComponent, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-square', 'Integration | Component | item square', {
  integration: true
});

test('item renders correctly', function(assert) {
  this.set('item', {
    heading: 'Heading Test',
    subheading: 'Subheading Test'
  });

  this.render(hbs`{{item-square item=item}}`);

  assert.equal(find('h2').textContent.trim(), 'Heading Test');
  assert.equal(find('p').textContent.trim(), 'Subheading Test');

  // Template block usage:
  this.render(hbs`
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
