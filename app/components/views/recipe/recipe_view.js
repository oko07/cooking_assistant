import Mn from 'backbone.marionette'
import {RecipeModel} from '../../models/recipe_model'
import {IndeegriendModel} from '../../models/indeegriend_model'
import {IndeegriendCollectionView} from '../indeegriends'
import {StepsCollectionView} from '../steps'
import _ from 'lodash'

let stars = [
         "&#x2606 &#x2606 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2606 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2606 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2606 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2605 &#x2606",
         "&#x2605 &#x2605 &#x2605 &#x2605 &#x2605",
      ]

let RecipeView = Mn.View.extend({
  template: ctx => `<div class="modal-recipe">
                    <div class="x-btn">×</div>
                    <div class="wrapper">
                      <h2>${ctx.name}</h2>
                      <p>${ctx.description}</p>
                      <div>${stars[ctx.rating]}</div>
                    </div>
                      <div class="ingredients"></div>
                      <div class="steps-img">
                        <img src="${ctx.imgPath}">
                        <div class="steps"></div>
                      </div>
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
