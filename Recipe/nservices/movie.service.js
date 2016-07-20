/**
 * Created by Donut on 7/19/16.
 */
angular
  .module('plunker')
  .service('movieService', MovieService)

function MovieService() {
  //cannot bypass this line.
  //services-talk to the database, hold business logic.
  //2ways to create services- factory method and service method
  //they return data to controller which might eventually get transferred to the view

  //internally it gets called with a new keyword
  //it creates a new constructor object which gets called using the new keyword.
  // .service notation creates a new singleton object

  // a singleton is an object that can only be instantiated once only.

  var movies = [{
    name: 'chicken tikka massala',
    ingredients: ['chicken', 'massala', 'salt'],
    runningTime: 45
  },
    {
      name: 'fish tikka massala',
      ingredients: ['fish', 'massala', 'salt'],
      runningTime: 65
    },
    {
      name:'mutton tikka massala',
      ingredients: ['mutton', 'massala', 'salt'],
      runningTime: 85
    },
    {
      name:'paneer tikka massala',
      ingredients: ['paneer', 'massala', 'salt'],
      runningTime: 25
    },
    {
      name:'aaloo tikka massala',
      ingredients: ['aaloo', 'massala', 'salt'], 
      runnkingTime: 35
    }
  ];

  this.getMovies = function() {
    return movies;
  }

  this.getName = function(){
    return "Hello World";
  }
}
