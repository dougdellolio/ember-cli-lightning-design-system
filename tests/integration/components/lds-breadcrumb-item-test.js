import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-breadcrumb-item', 'Integration | Component | lds breadcrumb item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-breadcrumb-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-breadcrumb-item}}
      template block text
    {{/lds-breadcrumb-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
