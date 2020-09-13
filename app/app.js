'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
app.controller('myController', function ($scope, $document, $compile) {
      $scope.processClass = function(event){
          var parent = angular.element($document[0].querySelector('.callMenu'));
         var element = angular.element(event.target);
          if(element.attr('class') === 'ng-scope visitor'){
              element.removeClass('ng-scope');
          }
         if(element.attr('class') === 'visitor') {
             var currentHost = angular.element($document[0].querySelector('.host'));
             currentHost.removeClass('host').addClass('visitor');
             element.removeClass('visitor').addClass('host');
             element.remove();
             var elementFromHTML = event.target;
             var compiledElement = $compile(elementFromHTML)($scope);
             parent.append(compiledElement);

         }

      };
    });
