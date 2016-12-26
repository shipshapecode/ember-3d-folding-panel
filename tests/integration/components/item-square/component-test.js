import { moduleForComponent, test } from 'ember-qunit';
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

  assert.equal(this.$('h2').text().trim(), 'Heading Test');
  assert.equal(this.$('p').text().trim(), 'Subheading Test');

  // Template block usage:
  this.render(hbs`
    {{#item-square item=item}}
      template block text
    {{/item-square}}
  `);

  const text = String(this.$().text().trim());
  assert.ok(text.startsWith('template block text'));
  assert.ok(text.includes('Heading Test'));
  assert.ok(text.includes('Subheading Test'));
  assert.ok(text.endsWith('View More'));
});
