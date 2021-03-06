import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-page-header', 'Integration | Component | lds page header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-page-header}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-page-header}}
      template block text
    {{/lds-page-header}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
