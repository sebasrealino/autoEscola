angular.module("autoEscola").config(function ($routeProvider){
	$routeProvider.when("/cadastrarQuestoes", {
		templateUrl: "view/cadastrarQuestoes"
	});
	$routeProvider.when("/mainView", {
		templateUrl: "view/mainView"
	});

});