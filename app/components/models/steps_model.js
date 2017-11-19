import Bb from 'backbone'

let StepsModel = Bb.Model.extend({
  defaults: {
    description: '',
    timer: null,
    reminders: null
  }
})

export {StepsModel}
