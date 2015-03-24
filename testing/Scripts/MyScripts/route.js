app.config(function ($routeProvider) {

    $routeProvider.when("/Admin", {
        templateUrl: "/Home/Index",
        controller: "crudController"
    }
    )
    $routeProvider.when("/User", {
        templateUrl: "/Home/User",
        controller: "crudController"
    }
)
        .otherwise("/User");

    

});