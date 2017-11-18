import Marionette from 'backbone.marionette';
import {MainView} from './views/main';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new MainView());
  }
});
