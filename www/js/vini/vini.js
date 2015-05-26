angular.module("app").controller("ViniCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("ViniCtrl");

$scope.vino={};

$scope.home= function(){
  LocationService.home();
}

$scope.addVino = function(vino){
  $log.debug("name:"+vino.name);
  $log.debug("quantita:"+vino.quantita);
  vino.tipo='V';
  vino.id=vino.tipo+"_"+vino.name+"_"+vino.quantita;
  MagazzinoService.add(vino);
};

$scope.getVini = function(){
  var vini = MagazzinoService.get('V');
  $log.debug("vini:"+vini.lenght);
  return vini;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;



});
