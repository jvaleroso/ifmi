/// <reference path="../../typings/angularjs/angular.d.ts" />
var Ifmi;
(function (Ifmi) {
    var Controllers;
    (function (Controllers) {
        var NavigationController = (function () {
            function NavigationController($location) {
                this.$location = $location;
            }
            NavigationController.prototype.getClass = function (path) {
                var url = this.$location.path();
                return url.substring(0, path.length) == path && path.length == url.length;
            };
            return NavigationController;
        })();
        Controllers.NavigationController = NavigationController;
        angular.module('ifmiApp').controller('NavigationController', [
            '$location',
            NavigationController
        ]);
    })(Controllers = Ifmi.Controllers || (Ifmi.Controllers = {}));
})(Ifmi || (Ifmi = {}));
//# sourceMappingURL=NavigationController.js.map