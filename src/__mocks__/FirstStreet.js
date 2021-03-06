const Http = require('./Http');
const Api = require('../api');

class FirstStreet {
  constructor(apiKey = null, options = {}) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    }

    const api = new Api(new Http(apiKey, options));
    api.bindTo(this);
  }
}

module.exports = FirstStreet;
