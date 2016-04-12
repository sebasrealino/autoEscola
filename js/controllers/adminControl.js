angular.module("autoEscola").controller("adminControl", function ($scope){
	$scope.app = "Auto Escola";
	$scope.quizNameAdmin = "Quiz admin control";
	$scope.questions = [];
	$scope.adicionarQuestao = function (question){
		$scope.questions.push(angular.copy(question));
		cont = questions.lenght;
		question.id = cont;
		delete $scope.question;
	};

});
