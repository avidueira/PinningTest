/* globals angular */
'use strict';
angular.module('testing')
    .controller('homeCtrl', [
        '$scope',
        function ($scope) {

            var outputDiv, count, timeout;

            $scope.running = false;

            $scope.$on('$ionicView.loaded', function () {
                outputDiv = document.getElementById('output');
            });

            $scope.startTest = function () {
                clearLog();
                log('Starting test...');
                $scope.running = true;
                count = 0;
                ping();
            }

            $scope.stopTest = function () {
                log('Stoping test...');
                $scope.running = false;
                clearTimeout(timeout);
                $scope.$digest();
            }

            var log = function (msg) {
                outputDiv.innerHTML = msg + '<br>' + outputDiv.innerHTML;
            }

            var clearLog = function () {
                outputDiv.innerHTML = '';
            }

            var ping = function () {
                count++;
                const options = {
                    method: 'get'
                };
                cordova.plugin.http.sendRequest('https://www.google.cl/', options, function (response) {
                    log('#' + count + ': status: ' + response.status);
                    if ($scope.running) {
                        timeout = setTimeout(function () { ping(); }, 1000);
                    }
                }, function (response) {
                    log('#' + count + ': status: ' + response.status + ' / ' + response.error);
                    $scope.stopTest();
                });
            }

        }
    ]);