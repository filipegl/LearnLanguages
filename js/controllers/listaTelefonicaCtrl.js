angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
	$scope.app = "Lista Telefonica";
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular"},
		{nome: "Vivo", codigo: 15, categoria: "Celular"},
		{nome: "Tim", codigo: 41, categoria: "Celular"},
		{nome: "GVT", codigo: 25, categoria: "Fixo"},
		{nome: "Embratel", codigo: 21, categoria: "Fixo"}
	];
	$scope.contatos = [
		{nome: "Rebeca", telefone: "985845432", data: new Date},
		{nome: "Filipe", telefone: "996240715", data: new Date},
		{nome: "Maria", telefone: "985346890", data: new Date} 
	];

	/*var carregaContatos = function() {
		$http.get("algum link").then(function (data, status) {
			$scope.contatos = data;
		})
	}*/
	$scope.adicionarContato = function (contato) {
		/*$http.post("algum link", contato).then(function(data){
			delete $scope.contato; 
			carregarContatos();
		})*/
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato; 
	}

	$scope.apagarContato = function () {
		$scope.contatos.pop();
		//delete $scope.contato; 
	}
	});