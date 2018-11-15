// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    cordova.plugin.http.setSSLCertMode('pinned', function() {
      console.log('setSSLCertMode: success');
    }, function() {
      console.log('setSSLCertMode: error');
    });

    outputDiv = document.getElementById('output');

  });
})

var running = false;
var count = 0;
var outputDiv;

function startTest() {  
  output('startTest');
  running = true;
  count = 0;
  ping();
}

function stopTest() {
  output('stopTest');
  running = false;
}

function ping() {
  count++;
  const options = {
    method: 'get'
  };
  cordova.plugin.http.sendRequest('https://www.google.cl/', options, function(response) {
    console.log(response.data);
    output('Intento #' + count + ': ' + response.status);
    if (running) {
      setTimeout(function() { ping(); }, 1000);
    }
  }, function(response) {
    output('Intento #' + count + ': ' + response.status + ' - ' + response.error);
  });
}

function output(msg) {
  outputDiv.innerHTML = msg + '<br>' + outputDiv.innerHTML;
}
