import Mn from 'backbone.marionette'
import Bb from 'backbone'
import {buildCollection} from '../../utils'
import {RecipeModel} from '../../models/recipe_model'

let MOCK_RECIPE_COLLECTION = [{
  id: 1,
  name: 'Ciasto Marchewkowe',
  description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.',
  rating: 2
}, {
  name: 'Zupa gulaszowa',
  description: 'Maecenas malesuada elit lectus felis.',
  rating: 3
}, {
  name: 'Barszcz czerwony z uszkami i majerankiem',
  description: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac.',
  rating: 5
}]

let RecipeRowView = Mn.View.extend({
  template: ctx => `
    <div class="recipe"><h2>${ctx.name}</h2> ${ctx.description}</div>
  `,


  triggers: {
    'click': 'recipe:clicked'
  },
  onRecipeClicked () {
  }
})


let RecipesCollectionView = Mn.CollectionView.extend({
  initialize () {
    this.collection = buildCollection(MOCK_RECIPE_COLLECTION)
  },
  childView: RecipeRowView
})

export {RecipesCollectionView}
