const City = require('./index');
const summaryMock = require('../../__mocks__/summary');

let summary = null;
describe('City', () => {
  beforeEach(() => {
    summary = new City(summaryMock);
  ***REMOVED***);

  it('should initialize', () => {
    expect(summary).toMatchSnapshot();
  ***REMOVED***);

  it('should have name', () => {
    expect(summary.name).toBeDefined();
  ***REMOVED***);

  it('should have state', () => {
    expect(summary.state).toBeDefined();
  ***REMOVED***);

  it('should have polygon data', () => {
    expect(summary.polygon).toBeDefined();
  ***REMOVED***);

  it('should have polygon geoJSON', () => {
    expect(summary.polygonGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have center data', () => {
    expect(summary.center).toBeDefined();
  ***REMOVED***);

  it('should have center geoJSON', () => {
    expect(summary.centerGeoJSON).toBeDefined();
  ***REMOVED***);

  it('should have bounds data', () => {
    expect(summary.bounds).toBeDefined();
  ***REMOVED***);

  it('should have bounds geoJSON', () => {
    expect(summary.boundsGeoJSON).toBeDefined();
  ***REMOVED***);
***REMOVED***);
