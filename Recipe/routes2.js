/**
 * Created by Donut on 7/19/16.
 */

angular
  .module('plunker')
  .config(function($stateProvider, $urlRouterProvider,
                   $locationProvider, $httpProvider){

    //$httpProvider.interceptors.push('httpInterceptor');

    $urlRouterProvider.otherwise('/showAllMovies');

    $stateProvider
      .state('showAllMovies',{
        url: '/showAllMovies',
        views: {
          content: {
            templateUrl: 'nviews/showAllMovies.html',
            controller: 'MovieController',
            controllerAs: 'movieCtrl'
          }
        }
      });

    /* $stateProvider
     .state('signinView',{
     url: '/signin',
     views:{
     nav:{
     templateUrl:'views/signinNavbar.html'
     },
     content:{
     templateUrl: 'views/signinView.html',
     controller: 'signinViewController',
     controllerAs: 'signinView'
     }
     }

     })
     .state('signout',{
     url:'/signout',
     views:{
     nav:{
     templateUrl: 'views/navbar.html'
     },
     content: {
     controller: 'signoutController',
     controllerAs: 'signout'
     }
     }

     })
     .state('showAllRecipes',{
     url: '/showAllRecipes',
     resolve: {
     users: ['userFactory',
     function(userFactory){

     return userFactory.getAllUsers();
     }],
     user: function() { return{}; }
     },
     views: {
     nav: {
     templateUrl: 'views/navbar.html'
     },
     content: {
     templateUrl: 'views/showAllUsersView.html',
     controller: 'allUsersViewController',
     controllerAs: 'allUsersView'
     }
     }

     })
     .state('detailedRecipeView',{
     url:'userDetails/:id',
     resolve:{
     user:['userFactory','$stateParams', function(userFactory,$stateParams){
     return userFactroy.loadCurrentUserDetails($stateParams.id)
     }],
     roles:['rolesFactory',
     function(rolesFactory) {
     return rolesFactory.getAllRoles();
     }]
     },
     views:{
     nav: {
     templateUrl: 'views/navbar.html'
     },
     content:{
     templateUrl: 'views/detailedUserView.html',
     controller: 'detailedUserViewController',
     controllerAs: 'detailedUserView'
     }
     }
     })
     .state('addANewRecipeView',{
     url: '/newUser',
     resolve:{
     roles: ['rolesFactory',
     function(rolesFactory) {

     return rolesFactory.getAllRoles();
     }]
     },
     views:{
     nav:{
     templateUrl: 'views/navbar.html'
     },
     content:{
     templateUrl: 'views/newUserView.html',
     controller: 'newUserViewController',
     controllerAs: 'newUserView'
     }
     }

     })*/
  });
