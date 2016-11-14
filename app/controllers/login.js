import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password'),
       authenticator = 'authenticator:token';


      let { identification, password } = this.getProperties('identification', 'password');
      // Validate fields
      if ( !identification ||
           !password ) {
        this.set('error', true);
      }
      else {
        this.set('error', false);
      }

      // Try and authenticate against server if no errors
      if ( !this.get('error') ) {
        this.get('session').authenticate(authenticator, credentials)
          .then(() => {
            this.set('error', false);
            this.transistionToRoute('index')
          })
          .catch((reason) => {
            this.set('error', true);
            console.log(reason);
          })
      }
    },
  }
});
