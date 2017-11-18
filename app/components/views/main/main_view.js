import Marionette from 'backbone.marionette';
import _ from 'lodash'
import $ from 'jquery'
import {RecipesCollectionView} from '../recipes'

let MainView = Marionette.View.extend({
  template: ctx => `
  <h1>Kulinarny Asystent v. 0.0.1</h1>
  <div id="menu"></div>
  <div id="#activeRecipe"></div>
  `,
  regions: {
    menu: '#menu',
    activeRecipe: '#activeRecipe'
  },
  events: {
    'recipe:active': 'onRecipeAcive'
  },
  onRecipeAcive (options) {
    this.showChildView('activeRecipe', new RecipeView(options))
  },
  onRender () {
    this.showChildView('menu', new RecipesCollectionView())
  },
  initialize () {
  }
});

export {MainView}
