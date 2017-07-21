(function(){
    function commonSliderFn(){
        return{
            restrict:"E",
            templateUrl:"app/slider/slider.tpl.html"
        }
    }
    angular.module("common")
    .directive("commonSlider",[commonSliderFn]);
})();