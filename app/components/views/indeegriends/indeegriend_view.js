import Mn from 'backbone.marionette'
import Bb from 'backbone'
import {buildCollection} from '../../utils'
import {IndeegriendModel} from '../../models/indeegriend_model'

let MOCK_INDEEGRIENDS_COLLECTION = [{
  name: 'Jajko',
  how_much: '2',
  status: 'false'
}, {
  name: 'Cukier puder',
  how_much: '200 g',
  status: 'false'
}, {
  name: 'Olej roślinny',
  how_much: '150 ml',
  status: 'false'
}, {
  name: 'Drobno starta marchewka',
  how_much: '200 g',
  status: 'false'
}, {
  name: 'Drogno pokrojony ananas',
  how_much: '75 g',
  status: 'false'
}, {
  name: 'Wiórka kokosowe',
  how_much: '50 g',
  status: 'false'
}, {
  name: 'Mąka',
  how_much: '200 g',
  status: 'false'
}, {
  name: 'Proszek do pieczenia',
  how_much: '0.5 łyżeczki',
  status: 'false'
}, {
  name: 'Soda',
  how_much: '1 łyżeczka',
  status: 'false'
}, {
  name: 'Cynamon',
  how_much: '1 łyżeczka',
  status: 'false'
}]

let IndeegriendRowView = Mn.View.extend({
  template: ind => `
    <div class="indeegriends"><input type="checkbox">${ind.how_much} ${ind.name}</br></div>
  `
})

let IndeegriendCollectionView = Mn.CollectionView.extend({
  initialize () {
    this.collection = buildCollection(MOCK_INDEEGRIENDS_COLLECTION)
  },
  childView: IndeegriendRowView
})

export {IndeegriendCollectionView}
