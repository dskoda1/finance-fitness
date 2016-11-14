import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(modelName, query) {
    return this.get('store').findRecord('user', 'me');
  }
});
