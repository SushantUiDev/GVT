(function(){
    angular.module("slider",[]);
    
    angular.module("slider")
    .config(function(){
        console.log("I am slider module config method..");
    })
    .run(function(){
        console.log("I am slider module run method..");
    })
})();