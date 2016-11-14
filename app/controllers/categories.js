import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    openList() {
      this.transitionToRoute('categories');
    },
    openNew() {
      this.transitionToRoute('categories.new');
    },


  }
});
