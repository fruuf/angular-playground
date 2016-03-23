/*
uiRouter allows us to resolve dependencies before transitioning to the new state.
This allows for full controll of loading the data needed for the next view.
uiRouter has three events for keeping track of the state transition. They get
emitted on the rootScope and passed to all child scopes.

$stateChangeStart
gets fired when a state transition is requested. This is usually due to the user
clicking on a link (or any other element with ui-sref) or by a controller using
$state.go()
uiRouter checks if the new state has a resolve object defined. If it does it will
run every function of the resolve object. If the function returns a promise
(thats what we do here) it waits for the promise to be resolved and then injects
the result of that promise into the new state (controller). Using this way its
easy to do async operations (promisses).
A common use case is to listen to this event on the rootScope and set a loading
flat to true.
$rootScope.$on("$stateChangeStart", () => {
  $rootScope.loading = true;
})
Since the rootScope is available in every template its easy to define a view for
loading the data with ng-show="loading"

$stateChangeSuccess
When all promisses are resolved uiRouter runs the constructor function of the states
controller(controllerS, one controller per view, but multiple views are possible).
Every key of the resolve object (todoData) can be injected into the controller and
contains the result of the function, or the result of the promisse, if the function returned a promise.
For the above example this is the event that sets loading to false
$rootScope.$on("$stateChangeSuccess", () => {
  $rootScope.loading = false;
})

$stateChangeError
If a promise cant be resolved or the state cant be found this event gets fired.
It's a good practive to capture this event and transition to some kind of error state
to show a message to the user
*/

export default {
  // since uglifyJS renames function paramenters to shorter names, we need to tell
  // angular explicitly what to inject into the function. I like to use the array
  // syntax because its short and doesnt look to bad if you do it inline.
  // Just note that this array is treated as a function. 
  // In this example we use $q to return a promise for a async operation. We simulate it with window.setTimeout
  // In a real world exapmple this function would request a ressource from a RESTful API
  // or call a service.
  todoData: ["$q", ($q) => {
    return $q((resolve, reject) => {
      let allTodos = [
        {
          title: "Todo 1",
          id: "1",
          done: false
        },
        {
          title: "Todo 2",
          id: "2",
          done: false
        }  
      ];
      window.setTimeout(() => {
        resolve({ allTodos });
      }, 5000);
    });
  }]
};