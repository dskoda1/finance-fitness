import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: null,
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    setUser(user) {
      this.set('user', user['attributes'])
    }
  }
});
