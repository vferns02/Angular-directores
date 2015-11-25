
angular.module("directores").controller("agregarCtrl",function($scope){

    $scope.directores = [];



    $scope.agregar=function(){
        $scope.directores.push({
            nombre:$scope.nuevoDirector.nombre,
            apellido:$scope.nuevoDirector.apellido,
            nacimiento:$scope.nuevoDirector.nacimiento,
            pelicula:$scope.nuevoDirector.pelicula,
            sinopsis:$scope.nuevoDirector.sinopsis

        })
    }
});