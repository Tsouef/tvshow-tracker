(function () {
  'use strict';


  routerConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];

  angular
  .module('TvShow')
  .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('root' , {
      url: '',
      abstract: true,
      views: {
        'navbar': {
          templateUrl: 'app/components/navbar/navbar.html',
          controller: 'NavbarCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        "container@" : {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.shows', {
      url: '/shows/:id',
      views : {
        "container@" : {
          templateUrl: 'app/components/details/details.html',
          controller: 'DetailsCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.add', {
      url: '/add',
      views: {
        "container@" : {
          templateUrl: 'app/components/add/add.html',
          controller: 'AddCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.login', {
      url: '/login',
      views: {
        "container@" : {
          templateUrl: 'app/components/login/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.signup', {
      url: '/signup',
      views: {
        "container@" : {
          templateUrl: 'app/components/login/signup.html',
          controller: 'SignUpCtrl',
          controllerAs: 'vm'
        }
      }
    })
    $urlRouterProvider.otherwise('/')
  }


})();