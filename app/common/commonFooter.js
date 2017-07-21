(function(){
    function commonFooterFn(){
        return{
            templateUrl:"app/footer/footer.tpl.html",
            restrict:"AEC"
        }
    }
    angular.module("common")
    .directive("commonFooter",[commonFooterFn])
})();