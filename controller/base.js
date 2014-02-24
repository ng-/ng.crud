'use strict'

module.exports = function($scope, db, data)
{
	var number = Math.floor(Math.random()*100)
	  , email  = 'adam.kircher@gmail.com'

	db('user').create({first:'adam', last:'kircher', email:email, number:number}).then(function(id)
	{
		$scope.users = db('user').read()
	})

	//$scope.stuff = db('test').select('*')

	//$scope.string = $cpus[2]('I am me', 'You are you')

	//$scope.yay = ng.version

	//return 'example/template/george.html'
}