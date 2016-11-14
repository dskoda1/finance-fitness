import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    submit() {
      let { name } = this.getProperties('name');
      if ( name == '' ) return false;

      let category = this.store.createRecord('category',
      { name: name });

      category.save();

    }
  }
});
