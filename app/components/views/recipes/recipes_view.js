import Mn from 'backbone.marionette'
import Bb from 'backbone'
import {buildCollection} from '../../utils'
import {RecipeModel} from '../../models/recipe_model'

let MOCK_RECIPE_COLLECTION = [{
  id: 1,
  name: 'Leczo z Kurczakiem',
  description: 'Leczo z kurczakiem, papryką oraz cukinią i kukurydzą.',
  rating: 2,
  imgPath: 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/leczo_z_kurczakiem.jpg'
}, {
  name: 'Zdrowe ciasteczka owsiane ze śliwkami',
  description: 'Kakaowe ciasteczka owsiane ze śliwkami i daktylami.',
  rating: 3,
  imgPath: 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/zdrowe_ciasteczka_owsiane_ze_sliwkami.jpg'
}, {
  name: 'Zupa rybna',
  description: 'Z kawałkami panierowanej ryby i tartymi warzywami.',
  rating: 5,
  imgPath: 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/zupa_rybna_2.jpg'
}, {
  name: 'Malinowa Agua Fresca',
  description: 'Chłodzący napój z malinami, imbirem i limonką',
  ratinf: 4,
  imgPath: 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/malinowa_agua_fresca.jpg'
}]

let RecipeRowView = Mn.View.extend({
  template: ctx => `
    <div class="recipe">
    <img src="${ctx.imgPath}">
    <h2>${ctx.name}</h2>
    <p>${ctx.description}</p>
    </div>
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
