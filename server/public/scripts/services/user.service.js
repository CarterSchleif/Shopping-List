myApp.service('UserService', ['$http', '$location', function ($http, $location) {
    console.log('UserService Loaded');
    
    var self = this;

    self.newList = {};
    self.newListItem = {};


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

    self.addListItem = (list) => {
        const id = list._id
        const updatedList = list;

        console.log('on click self.addList', list);

        $http({
            method: 'PUT',
            url: `/lists/${id}`,
            data: updatedList,
        }).then((response) => {
            console.log('Added newList', response);
            self.newListItem = {}; // Reset self.newListItem to empty object
            
        }).catch((error) => {
            console.log('error in self.addList', error);
        });//End $http
    }//End self.addListItem

    
}]);