(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
    })

      .state('archive', {
        url: '/archive',
        controller: 'ArchiveCtrl as archive',
        templateUrl: '/templates/archive.html'
        });
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase'])
    .config(config);
})();