const Api = require('./api');
const Http = require('./Http');

/**
 * Create a FirstStreet class
 * @constructor
 * @param {string} apiKey - A string with the base URL for account.
 * @param {Object} options - A configuration object.
*/
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
