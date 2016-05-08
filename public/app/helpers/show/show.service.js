(function () {
  'use strict';

  Show.$inject = ['$resource'];


  angular
  .module('TvShow')
  .factory('Show', Show);

  function Show($resource) {
    return $resource('/api/shows/:_id');
  }
})();