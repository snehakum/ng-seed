/**
 * Created by Donut on 7/18/16.
 */
angular.module('plunker').factory('recipeFactory', RecipeFactory);
function RecipeFactory(){
  var recipeFactory = {};

  var recipes = [{
    name: 'chicken tikka massala',
    ingredients: ['chicken', 'massala', 'salt'],
    cookingTime: 45
  },
    {
      name: 'fish tikka massala',
      ingredients: ['fish', 'massala', 'salt'],
      cookingTime: 65
    },
    {
      name:'mutton tikka massala',
      ingredients: ['mutton', 'massala', 'salt'],
      cookingTime: 85
    },
    {
      name:'paneer tikka massala',
      ingredients: ['paneer', 'massala', 'salt'],
      cookingTime: 25
    },
    {
      name:'aaloo tikka massala',
      ingredients: ['aaloo', 'massala', 'salt'],
      cookingTime: 35
    }
  ];

  recipeFactory.getRecipes = function() {
    return recipes;
  };
  recipeFactory.getRecipeName = function(){
    return "y";
  };
  recipeFactory.getCookingTime = function(){
    return 65;
  };
  return recipeFactory;
}
