(function() {
  'use strict';

    LoginController.$inject = ['Auth'];


  angular
  .module('TvShow')
  .controller('LoginCtrl' , LoginController );

  function LoginController(Auth) {
    var vm = this;
    vm.login = login;

    function login() {
      Auth.login({
        email : vm.email,
        password : vm.password
      })
    }

    
  }
})();