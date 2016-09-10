/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-3d-folding-panel',
  included: function(app) {
   this._super.included(app);
   app.import('vendor/modernizr.js');
  }
};
