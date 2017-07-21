(function () {
    angular.module("myApp", ["ngRoute", "header", "footer", "products", "slider", "digital", "strategy"]);

    angular.module("myApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/footer", {
                    templateUrl: "app/footer/footer.tpl.html",
                    controller: "footerCtrl"
                })
                .when("/products", {
                    templateUrl: "app/products/products.tpl.html",
                    controller: "productsCtrl"
                })
                .when("/slider", {
                    templateUrl: "app/slider/slider.tpl.html",
                    controller: "sliderCtrl"
                })
                .when("/digital", {
                    templateUrl: "app/digital/digital.tpl.html",
                    controller: "digitalCtrl"
                })
                .when("/strategy", {
                    templateUrl: "app/strategy/strategy.tpl.html",
                    controller: "strategyCtrl"
                })
                .otherwise({
                    redirectTo: "/slider"
                })
        });

})();