import Mn from 'backbone.marionette'
import {RecipeModel} from '../../models/recipe_model'

let RecipeView = Mn.View.extend({
  template: ctx => `<div class="recipe">${ctx.name}${ctx.description}</div>`,

  initialize (){
    this.model = new RecipeModel()
    this.model.set('name', 'potrawka Snafa')
    this.model.set('description', 'Najlepsza potrawka')
    console.log(this.model);
  }
})

export {RecipeView}
