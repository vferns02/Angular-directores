angular.module("directores").controller("consultarCtrl",function($scope) {


    $scope.directores = [{
        nombre: "Stanley ",
        apellido: "Kubrick",
        nacimiento: "26/07/1928",
        pelicula: "El resplandor",
        sinopsis: "Jack Torrance se traslada con su mujer y su hijo de siete años al impresionante hotel Overlook, " +
        "en Colorado, para encargarse del mantenimiento de las instalaciones durante la temporada invernal," +
        " época en la que permanece cerrado y aislado por la nieve."

    }, {
        nombre: "Steven",
        apellido: "Spielberg",
        nacimiento: "18/12/1946",
        pelicula: "Tiburón",
        sinopsis: "En las aguas de un pequeño pueblo costero del Este de Estados Unidos, " +
        "un enorme tiburón ataca a varias personas."

    }, {
        nombre: "Timothy (Tim)",
        apellido: "Walter Burton",
        nacimiento: "25/08/1958",
        pelicula: "Pesadilla antes de navidad",
        sinopsis: "ack Skellington, el aburrido rey de Halloweentown, intenta apoderarse de la temporada" +
        " navideña para variar un poco. Ignorando los consejos de Sally, la solitaria muñeca de trapo " +
        "que oculta sus sentimientos por él, Jack recluta a tres pícaros personajes, para que lo ayuden a " +
        "secuestrar a Santa Claus."
    }]

});