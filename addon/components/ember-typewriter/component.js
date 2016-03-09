import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {
    $('.' + this.get('class')).typed({
      strings: this.get('strings'),
      contentType: this.get('contentType') //'html' or 'text'
    });
  }
});
