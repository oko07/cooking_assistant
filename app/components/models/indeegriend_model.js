import Bb from 'backbone'

let IndeegriendModel = Bb.Model.extend({
  defaults: {
    name: '',
    how_much: '',
    status: 'false'
  }
})

export {IndeegriendModel}
