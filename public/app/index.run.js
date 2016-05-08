(function () {
  'use strict';
  
  runBlock.$inject = ['$log'];

  angular
  .module('TvShow')
  .run(runBlock);

  function runBlock($log) {
    
    $log.debug('runBlock end');
  }
  
})();
