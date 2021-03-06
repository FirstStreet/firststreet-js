const BaseModel = require('./index');
const mock = require('../../__mocks__/hurricaneProperty');

let response = null;

describe('mock', () => {
  beforeEach(() => {
    response = new BaseModel(mock);
  });

  it('should initialize a base model', () => {
    expect(response).toMatchSnapshot();
  });

  it('should return a raw response', () => {
    expect(response.raw).toBe(mock);
  });

  it('should return the correct id', () => {
    expect(response.FSID).toBe(mock.FSID);
  });

  it('should return the correct results', () => {
    expect(response.results).toBe(mock.results);
  });

  it('getData() should return the correct results', () => {
    const mockedData = {
      type: 'maxdepth',
      unit: 'meters',
      value: 0,
    };
    expect(response.getData('maxdepth', 'c1', 2023)).toEqual(mockedData);
  });
});
