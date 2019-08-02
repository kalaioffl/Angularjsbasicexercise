function OrderFormController($scope){
	$scope.services = [
		{
			name: 'HTML',
			price: 350,
			active:true
		},{
			name: 'CSS',
			price: 400,
			active:false
		},{
			name: 'Javascript',
			price: 900,
			active:false
		},{
			name: 'Bootstrap',
			price: 500,
			active:false
		},{
			name: 'Angularjs',
			price : 1000,
			active : false
		}
	];
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};
	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});
		return total;
	};
}





	