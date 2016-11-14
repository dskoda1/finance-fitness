import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    register() {
      //var credentials = this.getProperties('identification', 'password'),
      // authenticator = 'authenticator:token';
      this.set('error', false);
      this.set('emailExistsError', false);

      let { identification, password, passwordConfirmation } = this.getProperties('identification', 'password', 'passwordConfirmation');
      // Validate fields
      if ( ! identification ||
           ! password ||
           ! passwordConfirmation ) {
        this.set('error', true);
        return;
      }
      else {
        this.set('error', false);
      }

      // Try and authenticate against server if no errors
      if ( !this.get('error') ) {
        let data = {
          email: identification,
          password: password,
          password_confirmation: passwordConfirmation
        };
        Ember.$.ajax({
          data: data,
          method: 'POST',
          url: 'register'
        })
        .then(() => {
          this.transistionToRoute('index');
        })
        .catch((reason) => {
          this.set('emailExistsError', true);
        })

      }

    },
  }
});
