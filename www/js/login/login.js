angular.module("app").controller("LoginCtrl", function($routeParams, $scope, $log, AuthService,LocationService, $q){

var loginModel={};

$scope.preload=false;

$scope.logged=false;


function autentica(loginModel){
  var deferred = $q.defer();
  var ref = new Firebase();
  ref.authWithPassword({
    email: loginModel.email,
    password: loginModel.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      deferred.reject();
    } else {
      console.log("Authenticated successfully with payload:", authData);
      deferred.resolve();
     }
    });

    return deferred.promise;
}




$scope.accedi=function(loginModel){
  $scope.preload=true;
  var promise=autentica(loginModel);
  promise.then(function(){
    $log.debug("logged:"+$scope.logged);
    LocationService.home();
  }, function(){
    $log.debug("logged:"+$scope.logged);
    LocationService.errorPage();
  });


}

});
