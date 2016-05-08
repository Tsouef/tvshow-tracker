(function() {
  'use strict';


  angular
  .module('TvShow')
  .directive('repeatPassword', repeatPassword);

  function repeatPassword() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        console.log(elem)
        var otherInput = elem.inheritedData('$formController')[attrs.repeatPassword];

        ctrl.$parsers.push(function(value) {
          if(value === otherInput.$viewValue) {
            ctrl.$setValidity('repeat', true);
            return value;
          }
          ctrl.$setValidity('repeat', false);
        });
      }
    }
  }

})();