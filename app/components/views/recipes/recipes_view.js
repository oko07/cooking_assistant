import Mn from 'backbone.marionette'
import Bb from 'backbone'
import {buildCollection} from '../../utils'
import {RecipeModel} from '../../models/recipe_model'

let MOCK_RECIPE_COLLECTION = [{
  id: 1,
  name: 'Ciasto Marchewkowe',
  description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.',
  rate: 5
}, {
  name: 'Zupa gulaszowa',
  description: 'Maecenas malesuada elit lectus felis.',
  rate: 5
}, {
  name: 'Barszcz czerwony z uszkami i majerankiem',
  description: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac.',
  rate: 5
}]

let RecipeRowView = Mn.View.extend({
  template: ctx => `
    <div class="recipe"><h2>${ctx.name}</h2> ${ctx.description}<div class="x-btn">×</div></div>
  `
})

let RecipesCollectionView = Mn.CollectionView.extend({
  initialize () {
    this.collection = buildCollection(MOCK_RECIPE_COLLECTION)
    console.log('hehe', buildCollection(MOCK_RECIPE_COLLECTION))
  },
  childView: RecipeRowView
})

export {RecipesCollectionView}
