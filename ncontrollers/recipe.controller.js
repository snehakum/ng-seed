/**
 * Created by Donut on 7/18/16.
 */
var app = angular.module('plunker');
app.controller('RecipeController', function(recipeService, recipeFactory) {
  //getting the module

  var vm = this;
  vm.showRecipesFlag = false;

  vm.name = recipeService.getName();
  //$scope is the automated and synchronized bridge between JS and DOM
  //used only on controller
  //it is how we bind data from the controller to the view

  vm.age = 234234234234234;
  //can be string or number

  vm.numberofContinents = 6;
  vm.clickedRecipe = {};
  vm.recipeToBeAdded = {};
  vm.recipeToBeAdded.name = recipeFactory.getRecipeName();
  vm.recipeToBeAdded.cookingTime = recipeFactory.getCookingTime();

  vm.showRecipes = function(){
    vm.showRecipesFlag = true;
  };

  vm.hideRecipes = function(){
    vm.showRecipesFlag = false;
  };

  vm.recipes = recipeFactory.getRecipes();

  //recipe is an array of objects
  //each object is a recipe object

  vm.showClickedRecipe = function(i) {
    vm.clickedRecipe.name = vm.recipes[i].name;
    vm.clickedRecipe.cookingTime = vm.recipes[i].cookingTime;
  };
  vm.deleteRecipe = function(i){
    vm.recipes.splice(i,1);
  };
  vm.addRecipe = function(){
    vm.showAddRecipeForm = true;
  };
  vm.submitAddRecipeForm = function(){
    vm.recipes.push(vm.recipeToBeAdded);
    vm.showAddRecipeForm = false;
    vm.recipeToBeAdded = {};
  };
});
