(function(){
    angular.module("partial",["ngRoute"]);
    
    angular.module("partial")
    .config(["$stateProvider", "$urlRouterProvider",
            function($stateProvider, $urlRouterProvider) {
                /*Blog View Integration
                   1. Creating the state object
                   2. registering the state object
                   3. Invoking the state
                */

                var profileObj = {
                    templateUrl: "profile.tpl.html",
                    name:"profile"
                };
                

                var loginObj = {
                    templateUrl: "login.tpl.html",
                    name: "login"

                };



                $stateProvider.state("profile", profileObj);
                $stateProvider.state("login", loginObj);
                 console.log("partial Face Module");

            }
               
    ])
    
    
})();