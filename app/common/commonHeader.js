(function(){
    function commonHeaderFn(){
        return{
            templateUrl:"app/header/header.tpl.html",
            restrict:"AEC"
        }
    }
    angular.module("common")
    .directive("commonHeader",[commonHeaderFn])
})();