//app.config(function ($routeProvider) {

//    $routeProvider.when("/Admin", {
//        templateUrl: "/Home/Admin",
//        controller: "crudController"
//    }
//    )
//    $routeProvider.when("/User", {
//        templateUrl: "/Home/User",
//        controller: "crudController"
//    }
//)
//        .otherwise("/User");

    

//});



app.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state("/Admin", {
        Url: "/Home/Admin",
        controller: "crudController"
    }
    )
    $stateProvider
        .state("/User", {
        Url: "/Home/User",
        controller: "crudController"
    }
)
        $urlRouterProvider.otherwise("/User");



});