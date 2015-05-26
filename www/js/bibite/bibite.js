angular.module("app").controller("BibiteCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("BibiteCtrl");

$scope.bibite={};

$scope.home= function(){
  LocationService.home();
}

$scope.addBibite = function(bibite){
  $log.debug("name:"+bibite.name);
  $log.debug("quantita:"+bibite.quantita);
  bibite.tipo='B';
  bibite.id=bibite.tipo+"_"+bibite.name+"_"+bibite.quantita;
  MagazzinoService.add(bibite);
};

$scope.getBibite = function(){
  var bibite = MagazzinoService.get('B');
  $log.debug("vini:"+bibite.lenght);
  return bibite;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;



});
