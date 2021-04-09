const DetailLocality = require('../../DetailLocality');

class DetailNeighborhood extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get subtype() {
    return this.data.subtype;
  }

  get state() {
    return this.data.state;
  }

  get city() {
    return this.data.city;
  }

  get county() {
    return this.data.county;
  }
}

module.exports = DetailNeighborhood;