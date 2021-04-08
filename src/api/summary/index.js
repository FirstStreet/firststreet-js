const Property = require('../../models/property/summary/index.js');
const City = require('../../models/city/summary/index.js');
const LocalitySummary = require('../../models/LocalitySummary');
const { normalizeError } = require('../../Error');
const { fetcher } = require('../../lib/fetcher.js');

const API_VERSION = 'v1';

/**
 * @typedef {import('../models/Property').default} SummaryProperty
 * @typedef {import('../models/City').default} CityProperty
*/

/**
 * A City
 * @typedef {Object} PropertyCity
 * @property {number} FSID - The city unique identifier
 * @property {string} name - The city name
*/

/**
 * A LocationGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object} LocationGeometry
 * @property {string} polygon - The bounding box of the location
 * @property {string} center - The center of the location
 * @property {string} bounds - The bounds of the location
*/

const ENDPOINT_PREFIX = `/${API_VERSION}/location/summary`;

const summary = http =>
  // eslint-disable-next-line
   ({
    async getPropertyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/property/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, Property);

      return res;
    },
    async getPropertyByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      }
      
      const path = `${ENDPOINT_PREFIX}/property?lat=${lat}&lng=${lng}&key=${http.getKey()}`;
      
      const res = await fetcher(http, path, Property);
      
      return res;
    },
    async getPropertyByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getPropertyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/property?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, Property);

      return res;
    },
    async getCityByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getCityByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/city/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getCityByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/city?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getCityByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getCityByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/city?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, City);

      return res;
    },
    async getZctaByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getZctaByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getZctaByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getZctaByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getZctaByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getZctaByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getZctaByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/zcta?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getCountyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getCountyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/county/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getCountyByLatLng(params) {
      const { lat, lng } = params;

      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCountyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCountyByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/county?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getCountyByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getCountyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/county?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getNeighborhoodyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getNeighborhoodByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getNeighborhoodByLatLng(params) {
      const { lat, lng } = params;

      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getNeighborhoodByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getNeighborhoodByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getNeighborhoodByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getNeighborhoodByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/neighborhood?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getStateByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getStateByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/state/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getStateByLatLng(params) {
      const { lat, lng } = params;

      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getStateByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getStateByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/state?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getStateByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getStateByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/state?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getDistrictByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getDistrictByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/cd/${fsid}?key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getDistrictByLatLng(params) {
      const { lat, lng } = params;

      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getDistrictByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getDistrictByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/cd?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
    async getDistrictByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getDistrictByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/cd?address=${encodeURI(address)}&key=${http.getKey()}`;

      const res = await fetcher(http, path, LocalitySummary);

      return res;
    },
  });

module.exports = summary;
