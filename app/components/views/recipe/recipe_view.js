import Mn from 'backbone.marionette'
import {RecipeModel} from '../../models/recipe_model'
import {IndeegriendModel} from '../../models/indeegriend_model'
import {IndeegriendCollectionView} from '../indeegriends'
<<<<<<< Updated upstream
import {StepsCollectionView} from '../steps'
=======
import _ from 'lodash'

let stars = [
         "&#x2606 &#x2606 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2606 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2605 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2605 &#x2605",
      ]
>>>>>>> Stashed changes

let RecipeView = Mn.View.extend({
  template: ctx => `<div class="modal-recipe">
                    <h2>${ctx.name}</h2>
                    <h3>${ctx.description}</h3><h3>${stars[ctx.rating]}</h3>
                    <div class="x-btn">×</div>
                    <h2>Ingredients</h2>
                    <div class="ingredients"></div>
                    <div class="steps"></div>
                    </div>`,

  regions: {
    ingredients: '.ingredients',
    steps: '.steps'
  },
  triggers: {
    'click .x-btn': 'xbtn:clicked'
  },
  onChildviewNextClick (stepView) {
    stepView.model.set('status', 'hide')
    let stepsCollection = this.getChildView('steps').collection
    stepsCollection.findWhere('numer', )
  },
  onChildviewPrevClick () {
  },
  initialize (model){
    this.model = new RecipeModel()
    this.model.set(model.attributes)

  },
  onRender () {
    this.showChildView('steps', new StepsCollectionView())
    this.showChildView('ingredients', new IndeegriendCollectionView())
  }

})

export {RecipeView}
