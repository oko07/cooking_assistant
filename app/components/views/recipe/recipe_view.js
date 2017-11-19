import Mn from 'backbone.marionette'
import {RecipeModel} from '../../models/recipe_model'

let RecipeView = Mn.View.extend({
  template: ctx => `<div class="recipe">
                    <h2>${ctx.name}</h2>
                    <h3>${ctx.description}</h3><h3>${ctx.rating}</h3>
                    <h2>Ingredients</h2>
                    <div class="ingredients"></div>
                    <div class="steps"></div>
                    </div>`,

  regions: {
    ingredients: '#ingredients',
    steps: '#steps'
  },

  initialize (model){
    this.model = new RecipeModel()
    this.model.set(model.attributes)


  }
})

export {RecipeView}
