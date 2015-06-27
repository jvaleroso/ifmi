var Ifmi;
(function (Ifmi) {
    var app = angular.module('ifmiApp', ['ngResource', 'ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'scripts/app/views/home.html'
        }).when('/news', {
            templateUrl: 'scripts/app/views/news.html'
        }).when('/markets', {
            templateUrl: 'scripts/app/views/markets.html'
        }).when('/insights', {
            templateUrl: 'scripts/app/views/insights.html'
        }).when('/videos', {
            templateUrl: 'scripts/app/views/videos.html'
        }).otherwise({
            redirectTo: '/Home'
        });
    }]);
})(Ifmi || (Ifmi = {}));
//# sourceMappingURL=app.js.map