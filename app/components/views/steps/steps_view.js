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
      <div class="desc">${ctx.description}</div>
      <div class="timer">${ctx.timer ? ctx.timer : ''}</div>
      <div class="reminder">${ctx.reminders ? ctx.reminders : ''}</div>
      <div class="next">❯</div>
      <div class="prev">❮</div>
    </div>
  `,

  triggers: {
    'click .next': 'next:click',
    'click .prev': 'prev:click'
  }
})

let StepsCollectionView = Mn.CollectionView.extend({
  childView: StepsView,
  initialize () {
    this.collection = buildCollection(MOCK_STEPS_COLLECTION)
  }
})

export {StepsCollectionView}
