factories.factory(MANI.FACTORIES.ProjectsFactory, ProjectsFactory);

ProjectsFactory.$inject = ['$q', 'utils'];

function ProjectsFactory($q, utils) {

    var service = {};
    service.projects = [];
    service.getAllProjects = getAllProjects;

    return service;

    function getAllProjects(){
        var deferred = $q.defer();

        if(service.projects.length > 0){
            deferred.resolve(service.projects);
        } else{
            //get all the projects from backend here...
            utils.getLocalData('../assets/projects.json').then(function(data){
                console.log(data);
                deferred.resolve(data.data.projects);
            }, function(error){
                deferred.reject(error);
            });
        }

        return deferred.promise;
    }
}
