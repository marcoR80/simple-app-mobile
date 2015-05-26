angular.module('app')
.config(function($routeProvider) {
    var rootPath = 'js/';

    $routeProvider.
    when('/initPage', {
        templateUrl: rootPath + 'initPage/initPage.html',
        controller: 'InitPageCtrl'
    }).
    when('/vini', {
        templateUrl: rootPath + 'vini/vini.html',
        controller: 'ViniCtrl'
    }).
    when('/alimentari', {
        templateUrl: rootPath + 'alimentari/alimentari.html',
        controller: 'AlimentariCtrl'
    }).
    when('/igieneCasa', {
        templateUrl: rootPath + 'igieneCasa/igieneCasa.html',
        controller: 'IgieneCasaCtrl'
    }).
    when('/bibite', {
        templateUrl: rootPath + 'bibite/bibite.html',
        controller: 'BibiteCtrl'
    }).
    when('/igienePers', {
        templateUrl: rootPath + 'igienePersonale/igienePersonale.html',
        controller: 'IgienePersCtrl'
    }).
    otherwise({
      redirectTo: '/initPage'
    });
});
