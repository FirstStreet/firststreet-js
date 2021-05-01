const assert = require('assert');
const { fetcher } = require('../lib/fetcher.js');

class Resolver {
  #http;

  constructor(http) {
    this.#http = http;
  }


  async getServiceResponse(mapping, params, locationType, lookupType) {
    let model = mapping.model.all;
    if (!model && locationType) {
      model = mapping.model[locationType];
    }
    assert(model, `Internal error: cannot get model for endpoint ${mapping.endpointPrefix}`);

    let path = mapping.endpointPrefix;
    if (mapping.needsLocation) {
      path = `${path}/${locationType}`;
    }
    switch (lookupType) {
    case 'fsid':
      path = `${path}/${params.fsid}?key=${this.#http.getKey()}`;
      break;
    default:
      throw new Error(`Internal error: Lookup by ${lookupType} is not implemented`);
    }
    const res = await fetcher(this.#http, path, model);
    return res;
  }
}

module.exports = Resolver;
