myApp.controller('NewController', ['UserService', function(UserService) {
    console.log('NewController created');
    var self = this;

    self.UserService = UserService;
    self.newList = UserService.newList;
    self.addList = UserService.addList;
    self.addListItem = UserService.addListItem;
    self.newListItem = UserService.newListItem;
    self.listCreated;


        //Show and Hide adding list items
        self.showAddItem = (list) => {
            self.listCreated = true;
        }

    
}]);