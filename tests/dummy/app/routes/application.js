import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      strings: ["Typed.js is a <strong>jQuery</strong> plugin."]
    };
  }
});
