/**
 * Created by Donut on 7/19/16.
 */
angular.module('plunker').directive('movieElement', movieDirectiveFunction);
// camelcase to hash case conversion-
//recipeFlag --> recipe-Flag

function movieDirectiveFunction(){
  return{
    restrict: 'EA',
    //restrict property tells angular with 1 or 2 letters as to how you will create your directive
    //E = element
    //A = attribute
    //C = indicates that directive will be found in css class
    //M = similar to HTML comments

    /* element directive
     <movie-directive>

     </recipe-directive>
     */

    /* attribute directive
     <div recipe-directive>

     </div>
     */
    templateUrl: 'nviews/movie.directive.html',
    // HTML code
    //template: '<div ng-repeat = "recipe in recipes" ng-if="showRecipesFlag">'
    //          +'<p> {{recipe.name}} , {{recipe.cookingTime}}'
    //          + '<span><button ng-click="">Delete</button></span>'
    //          + '</p></div>',
    scope:{
      movies: '=',
      showMoviesFlag: '='
      //isolate scope bindings-
      //@ implies that the value of the attribute with the same name in the HTML element will be passed in
      // as a string
      //= implies binds the value of the expression to the literal value
      //eg- as an array
    }
    // isolate scope-
    // scope that exists within a particular directive
    // this is how we use scope with properties in a directives template

  };
}
