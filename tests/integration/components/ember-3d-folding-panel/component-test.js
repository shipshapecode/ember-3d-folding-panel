import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-3d-folding-panel', 'Integration | Component | ember 3d folding panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-3d-folding-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-3d-folding-panel}}
      template block text
    {{/ember-3d-folding-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
