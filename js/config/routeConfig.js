angular.module("autoEscola").config(function ($routeProvider){
	$routeProvider.when("/startLegislacao", {
		templateUrl: "view/startLegislacao.html",

	});
	$routeProvider.when("/quiz", {
		templateUrl: "view/quiz.html",
		controller: "quizControl",
	});
	$routeProvider.when("/admin", {
		templateUrl: "view/admin.html",
		controller: "adminControl",
	});
	$routeProvider.when("/main", {
		templateUrl: "view/main.html",
	});
	$routeProvider.otherwise({redirectTo: "/startLegislacao"});


});

