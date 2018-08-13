myApp.controller('NewController', ['UserService', function(UserService) {
    console.log('NewController created');
    var self = this;

    self.UserService = UserService;
    self.newList = UserService.newList;
    self.addList = UserService.addList;



    
}]);