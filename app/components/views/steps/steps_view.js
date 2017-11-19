import Mn from 'backbone.marionette'
import {StepsModel} from '../../models/steps_model'
import {buildCollection} from '../../utils'

let MOCK_STEPS_COLLECTION = [{
  description: 'Oh hi Mark',
  timer: 90,
  numer: 1,
  reminders: 3,
  visible: true
}, {
  description: 'Oh hi Mark',
  timer: 90,
  numer: 2,
  reminders: 3,
  visible: false
}, {
  description: 'Oh hi Mark',
  timer: 90,
  numer: 3,
  reminders: 3,
  visible: false
}]

let StepsView = Mn.View.extend({
  template: ctx => `
    <div class="step ${ctx.visible ? '' : 'hide'}">${ctx.description}</div>
    <div class="step ${ctx.visible ? '' : 'hide'}">${ctx.timer}</div>
    <div class="step ${ctx.visible ? '' : 'hide'}">${ctx.reminders}</div>
  `,
})

let StepsCollectionView = Mn.CollectionView.extend({
  childView: StepsView,
  initialize () {
    this.collection = buildCollection(MOCK_STEPS_COLLECTION)
  }
})

export {StepsCollectionView}
