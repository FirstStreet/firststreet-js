const Http = require('./index');
const { UNAUTHORIZED, UNKNOWN } = require('../Error');

const SUMMARY_VERSION = 'v0.1';

const ENDPOINT_PREFIX = `/data/${SUMMARY_VERSION}/summary`

describe('Http', () => {
  const key = 'aa.bb.cc';
  const options = {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  };

  const http = new Http(key, options);

  it('Parses the right error messages based on different error status codes', () => {
    const errorDefault = {
      errors: true,
      messages: UNKNOWN,
      debug: undefined,
      rateLimit: undefined,
      status: null,
    };

    const error401 = {
      errors: true,
      messages: UNAUTHORIZED,
      debug: options,
      rateLimit: undefined,
      status: 401,
    };

    const testCaseDefault = http.parseErrors({ status: null });
    expect(testCaseDefault).toEqual(errorDefault);

    const testCase401 = http.parseErrors({ status: 401 }, options);
    expect(testCase401).toEqual(error401);
  });

  it('.getKey should return the user API key', () => {
    expect(http.getKey()).toBe(key);
  });
});
