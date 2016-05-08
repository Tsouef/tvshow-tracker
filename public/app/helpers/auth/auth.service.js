(function(){
  'use strict';

  Auth.$inject = ['$http', '$state', 'userKeeper' , '$cookies' , '$alert'];


  angular
    .module('TvShow')
    .factory("Auth", Auth);

  function Auth($http, $state, userKeeper, $cookies, $alert) {
    userKeeper.currentUser = $cookies.getObject('user');
    console.log('Current user : ' ,userKeeper.currentUser)

    return {
      login: function(user) {
        return $http.post('/api/login', user)
        .success(function(data) {
          userKeeper.currentUser = data
          $state.go('root.home', {}, {reload: true});

          $alert({
            title: 'Cheers!',
            content: 'You have successfully logged in.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        })
        .error(function() {
          $alert({
            title: 'Error!',
            content: 'Invalid username or password.',
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
      },
      signup: function(user) {
        console.log("ALLO?")
        return $http.post('/api/signup', user)
        .success(function() {
          $state.go('root.home',{}, {reload: true});
          $alert({
            title: 'Congratulations!',
            content: 'Your account has been created.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        })
        .error(function(response) {
          $alert({
            title: 'Error!',
            content: response.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        })
      },
      logout: function() {
        return $http.get('/api/logout').success(function() {
          userKeeper.currentUser = null;
          $cookies.remove('user');
          $state.go($state.current, {}, {reload: true}); //second parameter is for $stateParams
          $alert({
            content: 'You have been logged out.',
            placement: 'top-right',
            type: 'info',
            duration: 3
          });
        })
      }
    }
  }
})();