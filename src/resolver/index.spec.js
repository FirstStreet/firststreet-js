const mapping = require('../api/mapping');
const Resolver = require('.');

const Http = require('../__mocks__/Http');
const probabilityCumulativeMock = require('../__mocks__/probabilityCumulative.json');
const propertyMock = require('../__mocks__/propertyDetail.json');
const historicEventMock = require('../__mocks__/historicEvent.json');
const aalPropertySummary = require('../__mocks__/aalPropertySummary.json');

describe('resolver', () => {
  const http = new Http('aa.bb.cc');
  const resolverObj = new Resolver(http);

  it('should get probability cumulative by fsid(has one model per endpoint)', async () => {
    const probabilityCumulativeMapping = mapping('probability', 'cumulative');
    const property = await resolverObj.getServiceResponse(probabilityCumulativeMapping, { fsid: 362788780 }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(probabilityCumulativeMock);
  });

  it('should get location detail by fsid (has various models per endpoint)', async () => {
    const propertyMapping = mapping('location', 'detail');
    const property = await resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(propertyMock);
  });

  it('should get location detail by address', async () => {
    const propertyMapping = mapping('location', 'detail');
    const property = await resolverObj.getServiceResponse(propertyMapping, { address: '212%20appoquin%20s,%20middletown,%20delware' }, 'property', 'address');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(propertyMock);
  });

  it('should get location detail by coordinate', async () => {
    const propertyMapping = mapping('location', 'detail');
    const property = await resolverObj.getServiceResponse(propertyMapping, { lat: 39.4419892115, lng: -75.6453718685 }, 'property', 'coordinate');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(propertyMock);
  });

  it('should get location detail by historic event (does not need location type)', async () => {
    const propertyMapping = mapping('historic', 'event');
    const property = await resolverObj.getServiceResponse(propertyMapping, { id: 12 }, null, 'id');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(historicEventMock);
  });

  it('should throw if unknown location type', (done) => {
    const propertyMapping = mapping('location', 'detail');
    resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'unknown', 'fsid')
      .then(() => { throw new Error('should throw error'); })
      .catch((e) => {
        expect(e.message).toEqual('Internal error: cannot get model for endpoint /location/detail');
        done();
      });
  });

  it('should throw if unknown lookup type', (done) => {
    const propertyMapping = mapping('location', 'detail');
    resolverObj.getServiceResponse(propertyMapping, { fsid: 1202672032 }, 'property', 'unknown')
      .then(() => { throw new Error('should throw error'); })
      .catch((e) => {
        expect(e.message).toEqual('Internal error: lookup by unknown is not implemented');
        done();
      });
  });

  it('should get property aal by fsid(has additional parameters)', async () => {
    const aalMapping = mapping('economic', 'aal');
    const property = await resolverObj.getServiceResponse(aalMapping, { fsid: 12345, depth: 100, basement: true }, 'property', 'fsid');
    expect(property).toMatchSnapshot();
    expect(property.raw).toEqual(aalPropertySummary);
  });
});
