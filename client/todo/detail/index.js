import angular from "angular";
import resolve from "./resolve";
import template from "./template.jade";
import { controller } from "./controller";

let module = angular.module("todoDetail", []);

module.config(["$stateProvider", ($stateProvider) => {
  $stateProvider.state("todo.detail", {
    url: "/:todoId",
    resolve,
    views: {
      "content@todo": {
        template, 
        controller,
        controllerAs: "DetailCtrl"
      }
    }
  });
}]);
  

export default module;