angular.module("app").controller("CancellaCategoriaCtrl", function($routeParams, $scope, $log,LocationService,MagazzinoService){

$log.debug("CategoriaCtrl");



$scope.home= function(){
  LocationService.home();
};

$scope.getAllCategorie = function(){

  var categorie = MagazzinoService.getCategoria();
  $log.debug(categorie);
  return categorie;
};


$scope.cancellaCategoria = function(id){
  $log.debug(id);
  MagazzinoService.cancellaCategoria(id);

};


});
