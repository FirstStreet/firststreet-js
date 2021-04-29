// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';

const PropertySummary = require('../models/location/property/summary/index.js');
const CitySummary = require('../models/location/city/summary/index.js');
const LocalitySummary = require('../models/location/LocalitySummary.js');
const CityDetail = require('../models/location/city/detail/index.js');
const PropertyDetail = require('../models/location/property/detail/index.js');
const CountyDetail = require('../models/location/county/detail/index.js');
const NeighborhoodDetail = require('../models/location/neighborhood/detail/index.js');
const ZctaDetail = require('../models/location/zcta/detail/index.js');
const StateDetail = require('../models/location/state/detail/index.js');
const DistrictDetail = require('../models/location/district/detail/index.js');
const TractDetail = require('../models/location/tract/detail/index.js');
const ProbabilityCumulative = require('../models/probability/cumulative');

const { normalizeError } = require('../Error');
const { fetcher } = require('../lib/fetcher.js');

const detailLevelSettings = {
  summary: {
    property: PropertySummary,
    city: CitySummary,
    county: LocalitySummary,
    neighborhood: LocalitySummary,
    zcta: LocalitySummary,
    state: LocalitySummary,
    cd: LocalitySummary,
    tract: LocalitySummary,
    endpointPrefix: '/location/summary',
  },
  detail: {
    property: PropertyDetail,
    city: CityDetail,
    county: CountyDetail,
    neighborhood: NeighborhoodDetail,
    zcta: ZctaDetail,
    state: StateDetail,
    cd: DistrictDetail,
    tract: TractDetail,
    endpointPrefix: '/location/detail',
  },
  cumulative: {
    property: ProbabilityCumulative,
    city: ProbabilityCumulative,
    county: ProbabilityCumulative,
    neighborhood: ProbabilityCumulative,
    zcta: ProbabilityCumulative,
    state: ProbabilityCumulative,
    cd: ProbabilityCumulative,
    tract: ProbabilityCumulative,
    endpointPrefix: '/probability/cumulative',
  },
};

const resolver = http => ({
  async getByFSID(type, params, detailLevel) {
    const { fsid } = params;
    if (!fsid) {
      return normalizeError('Expected required FSID. Usage: .getByFSID(fsid)');
    }

    const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}/${fsid}?key=${http.getKey()}`;

    const model = detailLevelSettings[detailLevel][type];
    const res = await fetcher(http, path, model);

    return res;
  },
  async getByLatLng(type, params, detailLevel) {
    const { lat, lng } = params;
    if (!lat) {
      return normalizeError('Expected required lat. Usage: .getByLatLng(lat, lng)');
    }

    if (!lng) {
      return normalizeError('Expected required lng. Usage: .getByLatLng(lat, lng)');
    }

    const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

    const model = detailLevelSettings[detailLevel][type];

    const res = await fetcher(http, path, model);

    return res;
  },
  async getByAddress(type, params, detailLevel) {
    const { address } = params;

    if (!address) {
      return normalizeError('Expected required address. Usage: .getByAddress(address)');
    }

    const path = `${detailLevelSettings[detailLevel].endpointPrefix}/${type}?address=${encodeURI(address)}&key=${http.getKey()}`;

    const model = detailLevelSettings[detailLevel][type];
    const res = await fetcher(http, path, model);

    return res;
  },
});

module.exports = resolver;