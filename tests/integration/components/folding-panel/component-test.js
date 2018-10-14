import { module, test } from 'qunit';
/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const panelStub = Service.extend({
  foldIsOpen: true,
  selected: {
    alt: 'Client 1',
    heading: 'Client 1',
    subheading: 'Lorem ipsum dolor sit amet, consectetur.',
    panelHeading: 'Panel Heading',
    panelSubheading: 'Panel Subheading',
    imageURL: 'img/logo1.png',
    panelInfo: '<p>Foo</p>'
  }
});

module('Integration | Component | folding panel', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:panel', panelStub);
    this.panel = this.owner.lookup('service:panel');
  });

  test('folding-panel renders selected info', async function(assert) {

    await render(hbs`{{folding-panel}}`);

    assert.equal(find('.fold-content h2').textContent.trim(), 'Panel Heading');
    assert.equal(find('.fold-content em').textContent.trim(), 'Panel Subheading');
    assert.ok(find('.fold-content').textContent.trim().endsWith('<p>Foo</p>'));
  });
});
