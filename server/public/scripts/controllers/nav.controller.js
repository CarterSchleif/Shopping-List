myApp.controller('NavController', ['UserService', function(UserService) {
    console.log('NavController created');
    var self = this;

    self.userService = UserService;
    
}]);