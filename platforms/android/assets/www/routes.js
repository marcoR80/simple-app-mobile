angular.module('app')
.config(function($routeProvider) {
    var rootPath = 'js/';

    $routeProvider.
    when('/initPage', {
        templateUrl: rootPath + 'initPage/initPage.html',
        controller: 'InitPageCtrl'
    }).
    when('/create', {
        templateUrl: rootPath + 'create/create.html',
        controller: 'CreateCtrl'
    }).
    when('/categoria/:id', {
        templateUrl: rootPath + 'categoria/categoria.html',
        controller: 'CategoriaCtrl'
    }).
    when('/cancellaCategoria', {
        templateUrl: rootPath + 'cancellaCategoria/cancellaCategoria.html',
        controller: 'CancellaCategoriaCtrl'
    }).
    otherwise({
      redirectTo: '/initPage'
    });
});
