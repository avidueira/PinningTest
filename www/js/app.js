angular.module('pinningTest', ['ionic', 'testing'])
  .config(
    ['$stateProvider',
      function ($stateProvider) {
        $stateProvider

          .state('pinningTest', {
            url: '/',
            abstract: true,
            templateUrl: 'modules/testing/templates/home.html',
            controller: 'homeCtrl'
          })

          .state('pinningTest.home', {
            url: 'home',
            cache: false,
            views: {
              'content': {
                templateUrl: 'modules/testing/templates/home.html',
                controller: 'homeCtrl'
              }
            }
          });
      }
    ])
  .run(function ($ionicPlatform, $state) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }


      cordova.plugin.http.setSSLCertMode('pinned', function () {
        console.log('setSSLCertMode: success');
      }, function () {
        console.log('setSSLCertMode: fail');
      });

      $state.go('pinningTest.home');
    });
  });