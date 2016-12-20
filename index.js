/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-typewriter',
  included: function(app) {
    this._super.included.apply(this, arguments);
  },
  options: {
    nodeAssets: {
      'typed.js': function() {
        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist',
          import: [
            'typed.min.js'
          ]
        };
      }
    }
  }
};
