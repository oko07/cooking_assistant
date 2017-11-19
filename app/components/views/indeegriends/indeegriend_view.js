import Mn from 'backbone.marionette'
import Bb from 'backbone'
import {buildCollection} from '../../utils'
import {IndeegriendModel} from '../../models/indeegriend_model'

let MOCK_INDEEGRIENDS_COLLECTION = [{
  name: ' filetu z kurczaka',
  how_much: '250 g',
  status: 'false'
}, {
  name: 'cebula',
  how_much: '1',
  status: 'false'
}, {
  name: 'ząbek czosnku',
  how_much: '2',
  status: 'false'
}, {
  name: 'kukurydza',
  how_much: '1',
  status: 'false'
}, {
  name: 'czerwona papryka',
  how_much: '1',
  status: 'false'
}, {
  name: 'cukinia',
  how_much: '300g',
  status: 'false'
}, {
  name: 'pomidory',
  how_much: '4',
  status: 'false'
}, {
  name: 'bulion drobiowy',
  how_much: '1/2 szklanki',
  status: 'false'
}]


let IndeegriendRowView = Mn.View.extend({
  template: ind => `
    <div class="indeegriends"><input type="checkbox"><b>${ind.how_much}</b> ${ind.name}</br></div>
  `
})

let IndeegriendCollectionView = Mn.CollectionView.extend({
  initialize () {
    this.collection = buildCollection(MOCK_INDEEGRIENDS_COLLECTION)
  },
  childView: IndeegriendRowView
})

export {IndeegriendCollectionView}
