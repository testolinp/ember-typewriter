/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-typewriter',
  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    if (!process.env.EMBER_CLI_FASTBOOT) {
      if (app.env === "production") {
        app.import(app.bowerDirectory + '/typed.js/dist/typed.min.js');
      } else {
        app.import(app.bowerDirectory + '/typed.js/js/typed.js');
      }
    }
  }
};
