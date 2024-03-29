const ApiResponse = require('../apiResponse');

class FsidResponse extends ApiResponse {
  get fsid() {
    if (this._data) {
      return this._data.fsid;
    }
    return undefined;
  }
}

module.exports = FsidResponse;
