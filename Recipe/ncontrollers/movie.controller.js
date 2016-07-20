/**
 * Created by Donut on 7/19/16.
 */
var app = angular.module('plunker');
app.controller('MovieController', function(movieService, movieFactory) {
  //getting the module

  var vm = this;
  vm.showMoviesFlag = false;

  vm.name = movieService.getName();
  //$scope is the automated and synchronized bridge between JS and DOM
  //used only on controller
  //it is how we bind data from the controller to the view

  vm.age = 234234234234234;
  //can be string or number

  vm.numberofContinents = 6;
  vm.clickedMovie = {};
  vm.movieToBeAdded = {};
  vm.movieToBeAdded.name = movieFactory.getMovieName();
  vm.movieToBeAdded.runningTime = movieFactory.getRunningTime();

  vm.showMovies = function(){
    vm.showMoviesFlag = true;
  };

  vm.hideMovies = function(){
    vm.showMoviesFlag = false;
  };

  vm.movies = movieFactory.getMovies();

  //recipe is an array of objects
  //each object is a recipe object

  vm.showClickedMovie = function(i) {
    vm.clickedMovie.name = vm.movies[i].name;
    vm.clickedMovie.runningTime = vm.movies[i].runningTime;
  };
  vm.deleteMovie = function(i){
    vm.movies.splice(i,1);
  };
  vm.addMovie = function(){
    vm.showAddMovieForm = true;
  };
  vm.submitAddMovieForm = function(){
    vm.movies.push(vm.movieToBeAdded);
    vm.showAddMovieForm = false;
    vm.MovieToBeAdded = {};
  };
});
