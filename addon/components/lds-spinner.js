import Ember from 'ember';
import layout from '../templates/components/lds-spinner';

export default Ember.Component.extend({
  layout,
  size: 'medium',
  color: 'default',
  hasContainer: false,

  sizeClass: Ember.computed('size', function() {
    const size = this.get('size');
    
    return (size === 'medium') 
      ? ' slds-spinner--medium'
      : ` slds-spinner--${size}`;
  }),

  colorClass: Ember.computed('color', function() {
  	const color = this.get('color');

  	return (color === 'default')
  	  ? ''
  	  : ` slds-spinner--${color}`;
  }),

  hasContainer: Ember.computed('hasContainer', function() {
  	const hasContainer = this.get('hasContainer');

  	return hasContainer;
  })
});
