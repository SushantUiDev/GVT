(function(){
    angular.module("digital",[]);
    
    angular.module("digital")
    .config(function(){
        console.log("I am digital module config method..");
    })
    .run(function(){
        console.log("I am digital module run method..");
    })
})();