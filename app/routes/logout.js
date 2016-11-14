import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    this.controllerFor('application').send('logout');
  }
});
