angular.module("app")
  .factory("AuthService", function($log, $window, $firebaseArray, LocationService) {


    var prodotti, categorie, res;

    function authHandlerProdotti(error, authData) {
      if (error) {
        $log.debug("Login Failed!", error);
      } else {
        $log.debug("Authenticated successfully with payload:", authData);

      }
    }

    function authHandlerCategorie(error, authData) {
      if (error) {
        $log.debug("Login Failed!", error);
      } else {
        $log.debug("Authenticated successfully with payload:", authData);
      }
    };



    function autentica(ref, auth, authHandler) {

      ref.authWithPassword({
        email: auth.email,
        password: auth.password
      }, authHandler);


    };

    var ref = new Firebase("https://vivid-torch-1065.firebaseio.com/magazzino");
    prodotti = $firebaseArray(ref);

    var categoriaRef = new Firebase("https://vivid-torch-1065.firebaseio.com/sezioni");
    categorie = $firebaseArray(categoriaRef);


    return {
      getCategorie: function() {
        return categorie;
      },
      getProdotti: function() {
        return prodotti;
      },
      auth: function(auth) {
        autentica(ref, auth, authHandlerCategorie);

      }
    }

  });
