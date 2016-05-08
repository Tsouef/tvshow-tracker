(function () {
  'use strict';

  config.$inject = ['$logProvider'];


  angular
  .module('TvShow')
  .config(config);
  
  
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
  
})();
