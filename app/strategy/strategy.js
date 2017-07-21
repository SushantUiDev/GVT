(function(){
    angular.module("strategy",[]);
    
    angular.module("strategy")
    .config(function(){
        console.log("I am strategy module config method..");
    })
    .run(function(){
        console.log("I am strategy module run method..");
    })
})();