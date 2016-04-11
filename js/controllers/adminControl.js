angular.module("autoEscola").controller("adminControl", function ($scope){
	$scope.app = "Auto Escola";
	$scope.quizNameAdmin = "Quiz admin control";
	$scope.questions = [{
		questionText: "Esta será uma questão hard coded",
		alternative1: "primeira alternativa hard coded",
		alternative2: "segunda alternativa hard coded",
		alternative3: "terceira alternativa hard coded",
		alternative4: "quarta alternativa hard coded",
		rightAnswer: 3,},
		{
		questionText: "Esta será a segunda questão hard coded",
		alternative1: "1 alternativa hard coded",
		alternative2: "2 alternativa hard coded",
		alternative3: "3 alternativa hard coded",
		alternative4: "4 alternativa hard coded",
		rightAnswer: 3,},

		];
});