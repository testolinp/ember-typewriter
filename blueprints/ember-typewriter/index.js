/*jshint node:true*/
module.exports = {
  description: 'Bower installs typed.js',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('typed.js', '1.1.1');
  }
};
