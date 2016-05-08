(function() {
  "use strict";


  angular
  .module('TvShow')
  .filter('fromNow' , fromNow);

  function fromNow() {
    return function(date) {
      return moment(date).fromNow();
    }
  }
})();