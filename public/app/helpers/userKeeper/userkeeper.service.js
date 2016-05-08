(function() {
  'use strict';


  angular
  .module('TvShow')
  .service('userKeeper' , userKeeper)


  function userKeeper() {
    var userKeeper = {
      currentUser:{}
    };

    return userKeeper;
  }
})();