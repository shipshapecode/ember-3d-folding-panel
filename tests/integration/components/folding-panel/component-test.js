import { moduleForComponent, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

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

  assert.equal(find('.fold-content h2').textContent.trim(), 'Panel Heading');
  assert.equal(find('.fold-content em').textContent.trim(), 'Panel Subheading');
  assert.ok(find('.fold-content').textContent.trim().endsWith('<p>Foo</p>'));
});
