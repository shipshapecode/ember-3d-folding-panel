import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Service from 'ember-service';

const panelStub = Service.extend({
  foldIsOpen: true,
  selected: {
    heading: 'Client 1',
    subheading: 'Lorem ipsum dolor sit amet, consectetur.',
    panelHeading: 'Panel Heading',
    panelSubheading: 'Panel Subheading',
    imageURL: 'img/logo1.png',
    panelInfo: '<p>Foo</p>'
  }
});

moduleForComponent('folding-panel', 'Integration | Component | folding panel', {
  integration: true,

  beforeEach() {
    this.register('service:panel', panelStub);
    this.inject.service('panel', { as: 'panel' });
  }
});

test('folding-panel renders selected info', function(assert) {

  this.render(hbs`{{folding-panel}}`);

  assert.equal(this.$('.fold-content h2').text().trim(), 'Panel Heading');
  assert.equal(this.$('.fold-content em').text().trim(), 'Panel Subheading');
  assert.ok(this.$('.fold-content').text().trim().endsWith('<p>Foo</p>'));
});
