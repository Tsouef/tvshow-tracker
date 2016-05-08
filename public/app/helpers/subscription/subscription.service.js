(function() {
  'use strict';

  Subscription.$inject = ['$http'];


  angular
  .module('TvShow')
  .factory('Subscription', Subscription)

  function Subscription($http) {
    return {
      subscribe: function(show, user) {
        return $http.post('/api/subscribe', { showId: show._id });
      },
      unsubscribe: function(show, user) {
        return $http.post('/api/unsubscribe', { showId: show._id });
      }
    }
  }
})();