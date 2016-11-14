import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    // Block is a function that takes a header, and a value
    // Set the authorization header so rails is happy
    block('Authorization', data['auth_token']);
  }
});
