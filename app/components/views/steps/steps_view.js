import Mn from 'backbone.marionette'
import {StepsModel} from '../../models/steps_model'
import {buildCollection} from '../../utils'

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    console.log(minutes, seconds);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
        timer = duration;
    }
  }, 1000);
}

let MOCK_STEPS_COLLECTION = [{
  description: 'Dodać pokrojoną w kosteczkę cukinię i wymieszać. Smażyć mieszając co chwilę przez ok. 2 minuty. Wlać wino i odparować.',
  timer: 120,
  numer: 1,
  visible: true
}, {
  description: 'Ugotuj wodę',
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
      <div class="timer-${ctx.timer ? 'active' : ''}">${ctx.timer ? ctx.timer : ''}</div>
      <div class="reminder">${ctx.reminders ? ctx.reminders : ''}</div>
      <div class="next">❯</div>
      <div class="prev">❮</div>
    </div>
  `,

  onDomRefresh () {
    let time = this.model.get('timer')
    let display = $('.timer-active');
    time ? startTimer(time, display) : null;
  },

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
