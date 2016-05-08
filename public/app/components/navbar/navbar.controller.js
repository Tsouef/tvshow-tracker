(function() {
  'use strict'

  NavbarController.$inject = ['Auth' , 'userKeeper'];


  angular
  .module('TvShow')
  .controller('NavbarCtrl' , NavbarController)

  function NavbarController(Auth, userKeeper) {

    var vm = this;
    vm.logout = logout;
    vm.currentUser = userKeeper.currentUser;

    function logout() {
      Auth.logout();
    }
  }
})();