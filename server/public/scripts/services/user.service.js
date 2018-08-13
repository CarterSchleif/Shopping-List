myApp.service('UserService', ['$http', '$location', function ($http, $location) {
    console.log('UserService Loaded');
    
    var self = this;

    self.newList = {};


    self.addList = function() {

        console.log('on click self.addList', self.newList);

        $http({
            method: 'POST',
            url: '/lists',
            data: self.newList
        }).then((response) => {
            console.log('Added newList', response);
            
        }).catch((error) => {
            console.log('error in self.addList', error);
        });//End $http
    }//End self.addList


    
}]);