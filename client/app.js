import angular from "angular"; // we dont use any globals with this application, hence we have to import angular as well
import uiRouter from "angular-ui-router";
import todo from "./todo"; // our module, it defines a state todo. I like to structure my files and folders
                           // like I nest my states. The url usually, but not neccessary follows. For example
                           // the url for a detailed view of a todo is /todo/:todoId and not /todo/detail/:todoId

angular.module("app", [
  uiRouter, // the devs op uiRouter decided to return the name of the angular module, not the module itself
            // since the file containing ui router is imported and therefore registered within angular 
            // and its dependency injection system, the name of the module is enough
  todo.name // I prefer to return the entire module, because it allows to rn additional config / run callbacks
])
.config(["$urlRouterProvider", ($urlRouterProvider) => {
  // In here we only define the url that ui router redirects to if no route matches.
  // the actual routes are defined within their modules. Since we declade them as a dependendy
  // of our app module, their run / config callbacks get executed.
  $urlRouterProvider.otherwise("/todo");
}])
.run(["$rootScope", ($rootScope) => {
  // see ./todo/resolve.js for a detailed explanation
  $rootScope.$on("$stateChangeStart", () => {
    $rootScope.loading = true;
  });
  $rootScope.$on("$stateChangeSuccess", () => {
    $rootScope.loading = false;
  });
}]);