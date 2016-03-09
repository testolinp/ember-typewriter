import Ember from 'ember';
import $ from 'jquery';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin,{
  didEnterViewport() {
    $('.' + this.get('class')).typed({
      strings: this.get('strings'),
      contentType: this.get('contentType') //'html' or 'text'
    });
  }
});
