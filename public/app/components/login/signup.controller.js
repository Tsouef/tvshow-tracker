(function() {
  'use strict';

  SignUpController.$inject = ['Auth'];


  angular
  .module('TvShow')
  .controller('SignUpCtrl' , SignUpController );

  function SignUpController(Auth) {
    var vm = this;
    vm.signup = signup;

    function signup(){
      Auth.signup({
        email : vm.email,
        password : vm.password
      })
    }
  }
})();