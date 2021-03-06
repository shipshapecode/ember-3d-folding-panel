'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const shim = require('@html-next/flexi-layouts/lib/pod-templates-shim');

shim(EmberAddon);

module.exports = function(defaults) {
  var project = defaults.project;
  var options = {
    'ember-cli-babel': {
      includePolyfill: true
    }
  };

  if (project.findAddonByName('ember-native-dom-event-dispatcher') && process.env.DEPLOY_TARGET === undefined) {
    options.vendorFiles = { 'jquery.js': null };
  }

  var app = new EmberAddon(defaults, options);

  /*
   This build file specifies the options for the dummy test app of this
   addon, located in `/tests/dummy`
   This build file does *not* influence how the addon or the app using it
   behave. You most likely want to be modifying `./index.js` or app's build file
   */

  return app.toTree();
};
