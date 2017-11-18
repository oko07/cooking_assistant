import Mn from 'backbone.marionette'

var EmailRouter = Mn.AppRouter.extend({

  appRoutes: {
    'home': 'showHome'
  },

  showHome () {
    console.log('home page')
  }
});
