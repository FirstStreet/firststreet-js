const City = require('./index');
const summaryMock = require('../../__mocks__/summary');

let summary = null;
describe('City', () => {
  beforeEach(() => {
    summary = new City(summaryMock);
  });

  it('should initialize', () => {
    expect(summary).toMatchSnapshot();
  });

  it('should have name', () => {
    expect(summary.name).toBeDefined();
  });

  it('should have state', () => {
    expect(summary.state).toBeDefined();
  });

  it('should have polygon data', () => {
    expect(summary.polygon).toBeDefined();
  });

  it('should have polygon geoJSON', () => {
    expect(summary.polygonGeoJSON).toBeDefined();
  });

  it('should have center data', () => {
    expect(summary.center).toBeDefined();
  });

  it('should have center geoJSON', () => {
    expect(summary.centerGeoJSON).toBeDefined();
  });

  it('should have bounds data', () => {
    expect(summary.bounds).toBeDefined();
  });

  it('should have bounds geoJSON', () => {
    expect(summary.boundsGeoJSON).toBeDefined();
  });
});
