const { normalizeError } = require('../../Error');
const Property = require('../../models/Property');
const City = require('../../models/City');

/**
 * @typedef {import('../models/Property').default} ParcelProperty
 * @typedef {import('../models/City').default} ParcelCity
*/


/**
 * A City property on the parcel
 * @typedef {Object} ParcelCityForProperty
 * @property {number} ID - The city unique identifier
 * @property {string} name - The city name
*/

/**
 * A ParcelGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object} ParcelGeometry
 * @property {string} polygon - The bounding box of the location
 * @property {string} center - The center of the location
 * @property {string} bounds - The bounds of the location
 */

const ENDPOINT_PREFIX = `${process.env.HTTP_HOST}/data/${process.env.VERSION}/parcel/`;

const parcel = http =>
  /**
   * getPropertyByID retrieves a property parcel by its unique identifier
   * @param {string} id - parcel unique identifier
   * @returns {ParcelProperty}
  */
  // eslint-disable-next-line
   ({
    async getPropertyByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getPropertyByID(id)');
      }

      const path = `${ENDPOINT_PREFIX}${id}?type=property&key=${http.getKey()}`;


      try {
        const response = await http.execute('GET', path);
        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }

        const model = new Property(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getCityByID(id)');
      }

      const path = `${ENDPOINT_PREFIX}${id}?type=city&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);


        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }

        const model = new City(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
  });
module.exports = parcel;
