import Marionette from 'backbone.marionette';
import _ from 'lodash'
import $ from 'jquery'
import {RecipesCollectionView} from '../recipes'
import {RecipeView} from '../recipe'

let MainView = Marionette.View.extend({
  template: ctx => `
  <h1>Kulinarny Asystent v. 0.0.1</h1>
  <div id="menu"></div>
  <div id="activeRecipe"></div>
  `,
  regions: {
    menu: '#menu',
    activeRecipe: '#activeRecipe'
  },
  events: {
    'recipe:active': 'onRecipeAcive'
  },
  onChildviewRecipeClicked (recipeView) {
    this.showChildView('activeRecipe', new RecipeView(recipeView.model))
  //console.log(options);
  },
  onChildviewXbtnClicked (recipeView){
    recipeView.destroy()
  },
  onRender () {
    this.showChildView('menu', new RecipesCollectionView())
    //this.showChildView('activeRecipe', new RecipeView())
  },

  initialize () {
  }
});

export {MainView}
