(function () {
  'use strict';

  MainController.$inject = ['Show'];

  angular
  .module('TvShow')
  .controller('MainCtrl', MainController);

  function MainController(Show) {
    console.log("ALLLO?")
    var vm = this;

    vm.filterByGenre = filterByGenre;
    vm.filterByAlphabet = filterByAlphabet;
    vm.shows = Show.query();
    vm.headingTitle = 'Top 12 Shows';
    vm.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    vm.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

    function filterByGenre(genre) {
      vm.shows = Show.query({genre: genre});
      vm.headingTitle = genre;
    }

    function filterByAlphabet(char) {
      vm.shows = Show.query({alphabet: char});
      vm.headingTitle = char;
    }

  }

})();