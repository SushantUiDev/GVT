(function(){
    function headerCtrlFn(){
        var vm=this;
        vm.brandName="JVT Online";
        vm.navbar=["footer","strategy","digital","products","slider"];
        
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrlFn]);
})();