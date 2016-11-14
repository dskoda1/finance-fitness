import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(){
    var me;
    me = this;
    Ember.$.getJSON({
      method: 'GET',
      url: 'users/me',
      headers: {
        'authorization': JSON.parse(localStorage['ember_simple_auth:session'])['authenticated']['auth_token']
      }
    })
    .then((user) => {
      me.controllerFor('application').send('setUser', user);
      me.transistionToRoute('index');
    })

  }
});
