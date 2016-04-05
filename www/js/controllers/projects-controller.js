controllers.controller(MANI.CONTROLLERS.ProjectsController, ProjectsController);

ProjectsController.inject = ['$scope', MANI.FACTORIES.ProjectsFactory];

function ProjectsController($scope, ProjectsFactory){
	
	init();

	function init(){
		ProjectsFactory.getAllProjects().then(function(data){
			console.log(data);
			$scope.projects = data;
		}, function(error){
			console.err(error);
			$scope.projects = [];
		});
	}
}