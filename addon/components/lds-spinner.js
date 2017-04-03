import Ember from 'ember';
import layout from '../templates/components/lds-spinner';

export default Ember.Component.extend({
  layout,
  size: 'medium',

  sizeClass: Ember.computed('size', function(){
    const size = this.get('size');
    
    return (size === 'medium') 
      ?  ''
      : ` slds-spinner--${size}`;
  })
});
