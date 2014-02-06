/*global define*/
define("main", function () {
  "use strict";

  // require('clear');
  require('parallel')([
    // Initialize the subsystems in parallel for fast boot
    require('prefs').init,
    require('indexeddb').init
  ], function () {
    // Load the main GUI components
    require('tree2');
    require('editor');
    require('slider');
    require('global-keys');
  });
});
