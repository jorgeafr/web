var app = angular.module('myApp',[]);
 app.controller('compraController', ['$scope', function($scope){
  $scope.listas = [
   {nombre: "Pizza Mediterranea", precio: "2.21", necesario: "Si"},
   {nombre: "Crema de Queso", precio: "2.17", necesario: "Si"},
   {nombre: "Anchoas", precio: "3.1", necesario: "No"},
   {nombre: "Cerveza", precio: "1", necesario: "No"}
  ];
  $scope.Save = function(){
   $scope.listas.push({
    nombre: $scope.nuevaComida.nombre,
    precio: $scope.nuevaComida.precio,
    necesario: $scope.nuevaComida.necesario
   });
   $scope.ocultar=false;
   $scope.ocultar2=false;
  };
  $scope.ocultar=false; //Propiedad ocultar del scope, como la de alumnos.
  $scope.ocultar2=false;
   $scope.showForm = function(){
   $scope.ocultar=true;
   console.log($scope.ocultar);
  };

   $scope.calcularNecesario = function(){
    var acumulador=0;
    $scope.ocultar2=true;
    for (var i = 0;i<$scope.listas.length; i++) {
        acumulador+=parseFloat($scope.listas[i].precio);
    }
    $scope.precioFinal=acumulador;
    console.log($scope.listas.length);
  };

 }]);﻿