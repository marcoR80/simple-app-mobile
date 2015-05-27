angular.module("app").controller("CategoriaCtrl", function($routeParams, $scope, $log,LocationService,MagazzinoService){

$log.debug("CategoriaCtrl");

$scope.categoria={};

$scope.tipoCategoria=$routeParams.id;
$log.debug("id categoria:"+$routeParams.id);


$scope.home= function(){
  LocationService.home();
}

$scope.addCategoria = function(categoria){
  $log.debug("name:"+categoria.name);
  $log.debug("quantita:"+categoria.quantita);
  categoria.tipo=$scope.tipoCategoria;

  categoria.id=categoria.tipo+"_"+categoria.name+"_"+categoria.quantita;
  MagazzinoService.add(categoria);
};

$scope.nameCategoria=function(){
  $log.debug("***********test*********");
  return MagazzinoService.getNameCategoria($scope.tipoCategoria);
}

$scope.getCategoria = function(){
  $log.debug("tipo: "+$scope.tipoCategoria);
  var categorie = MagazzinoService.get($scope.tipoCategoria);
  $log.debug("categorie:"+categorie.categorie);
  return categorie;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;



});
