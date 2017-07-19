(function(){
    angular.module("products",[]);
    
    angular.module("products")
    .config(function(){
        console.log("I am products module config method..");
    })
    .run(function(){
        console.log("I am products module run method..");
    })
})();