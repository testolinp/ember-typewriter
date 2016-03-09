import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  didInsertElement(){
    this.set('strings', ["Typed.js is a <strong>jQuery</strong> plugin."]);
    this.$('.' + this.get('class')).typed({
      strings: this.get('strings'),
      contentType: 'html' // or 'text'
    });
  }
});
