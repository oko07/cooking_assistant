import Mn from 'backbone.marionette'
import {StepsModel} from '../../models/steps_model'
import {buildCollection} from '../../utils'

let MOCK_STEPS_COLLECTION = [{
  description: 'Włóż torebkę z herbatą',
  numer: 1,
  visible: true
}, {
  description: 'Ugotuj wodę',
  timer: 90,
  numer: 2,
  reminders: 3,
  visible: false
}, {
  description: 'Zalej herbatę',
  numer: 3,
  visible: false
}]

let StepsView = Mn.View.extend({
  template: ctx => `
    <div class="step-wrapper ${ctx.visible ? '' : 'hide'}">
      <div class="step">${ctx.description}</div>
      <div class="step">${ctx.timer ? ctx.timer : ''}</div>
      <div class="step">${ctx.reminders ? ctx.reminders : ''}</div>
    </div>
  `,
})

let StepsCollectionView = Mn.CollectionView.extend({
  childView: StepsView,
  initialize () {
    this.collection = buildCollection(MOCK_STEPS_COLLECTION)
  }
})

export {StepsCollectionView}
