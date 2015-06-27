/// <reference path="../../typings/angularjs/angular.d.ts" />
module Ifmi.Controllers {
    export class NavigationController {
        constructor(private $location: ng.ILocationService) { }

        getClass(path: string): boolean {
            var url = this.$location.path();
            return url.substring(0, path.length) == path && path.length == url.length;
        }
    }

    angular.module('ifmiApp').controller('NavigationController', [
        '$location',
        NavigationController]);
}