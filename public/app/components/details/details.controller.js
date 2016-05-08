(function() {
  'use strict';

  DetailsController.$inject = ['userKeeper', '$stateParams', 'Show' , 'Subscription'];


  angular
  .module('TvShow')
  .controller('DetailsCtrl' , DetailsController);

  function DetailsController(userKeeper, $stateParams, Show, Subscription) {
    var vm = this;

    Show.get({_id: $stateParams.id} , function(show) {
      vm.show = show;
      console.log(vm.show);
      vm.isSubscribed = isSubscribed;
      vm.subscribe = subscribe;
      vm.unsubscribe = unsubscribe;
      vm.currentUser = userKeeper.currentUser;

      vm.nextEpisode = show.episodes.filter(function(episode) {
        return new Date(episode.firstAired) > new Date();
      })[0];


      function isSubscribed() {
        console.trace();
        console.log(vm.show.subscribers);
        console.log(userKeeper.currentUser._id);
        console.log("isSubscribeb?" , vm.show.subscribers.indexOf(userKeeper.currentUser._id) !== -1)
        return vm.show.subscribers.indexOf(userKeeper.currentUser._id) !==  -1;
      }

      function subscribe() {
        Subscription.subscribe(show).success(function() {
          vm.show.subscribers.push(userKeeper.currentUser._id);
        });
      }

      function unsubscribe() {
        Subscription.unsubscribe(show).success(function() {
          console.log("Je me unsusbscribe", vm.show.subscribers);
          var index = vm.show.subscribers.indexOf(userKeeper.currentUser._id);
          vm.show.subscribers.splice(index, 1)
        });
      }

    })
  }

})();