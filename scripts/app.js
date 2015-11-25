angular.module("directores",['ui.router']);

angular.module("directores").config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/menu");

    $stateProvider
        .state("menu",{
            url:"/menu",
            templateUrl:"views/menu.html"
        })
        .state("agregar",{
            url:"/agregar",
            templateUrl:"views/agregarDirector.html"
        })
        .state("consultar",{
            url:"/consultar",
            templateUrl:"views/consultarDirector.html"
        });

});


