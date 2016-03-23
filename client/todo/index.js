import angular from "angular";
import resolve from "./resolve";
import template from "./template.jade";
import { controller } from "./controller";
import detail from "./detail";

let module = angular.module("todo", [
  detail.name
]);

module.config(["$stateProvider", ($stateProvider) => {
  $stateProvider
    .state("todo", {
      url: "/todo",
      resolve,
      views: {
        "content@": {
          template, 
          controller,
          controllerAs: "TodoCtrl"
        }
      }
    });
}]);
  

export default module;