(function () {
  'use strict';

  AddController.$inject = ['$alert', 'Show'];

  
  angular
  .module('TvShow')
  .controller('AddCtrl', AddController);
  
  function AddController($alert, Show) {
    console.log("Add Controller");
    var vm = this;

    vm.addShow = addShow;

    function addShow() {
      console.log("passe bien par là non?")
      Show.save({ showName: vm.showName},
        function () {
          console.log("allo?")
          vm.showName = '';
          vm.addForm.$setPristine();
          $alert({
            content: 'TV show has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function (response) {
          console.log(response);
          vm.showName = '';
          vm.addForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        })
    }
  }
})();