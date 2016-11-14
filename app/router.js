import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  // User oriented routes
  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('profile');
});

export default Router;
