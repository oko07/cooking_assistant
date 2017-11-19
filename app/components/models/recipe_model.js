import Bb from 'backbone'

let RecipeModel = Bb.Model.extend({
  defaults: {
    name: '',
    description: '',
    steps: [],
    rating: ''
  }
})


export {RecipeModel}
