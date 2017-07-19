(function(){
    function headerCtrlFn(){
        var vm=this;
        vm.brandName="JVT Online";
        vm.navbar=["Home","Strategy","Consulting","Digital","Technology","Products","Slider"]
        
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrlFn]);
})();