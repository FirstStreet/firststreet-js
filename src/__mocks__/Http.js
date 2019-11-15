const fetch = require('node-fetch').default;
const {
  RATE_LIMIT, UNAUTHORIZED, UNKNOWN, NOT_FOUND, INTERNAL, OFFLINE, NOT_ACCEPTABLE,
***REMOVED*** = require('../Error');

// Mock Data
const summaryMockData = require('./summary');
const cityById = require('./cityByID');
const hurricaneProperty = require('./hurricaneProperty');
const tidalProperty = require('./tidalProperty');
const mviProperty = require('./mviProperty');
const mviCity = require('./mviCity');

const defaults = {
  host: 'https://FAKE-HOST-FOR-TESTING.com/',
***REMOVED***;

class Http {
  constructor(apiKey = null, options = defaults) {
    const requestOptions = { ...defaults, ...options ***REMOVED***;
    this.key = apiKey;
    this.options = {
      url: requestOptions.host,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
        'User-Agent': 'js/firststreet',
      ***REMOVED***,
    ***REMOVED***;
  ***REMOVED***

  getKey() {
    return this.key;
  ***REMOVED***

  parseBody(body, parseOptions = {***REMOVED***) {
    if (parseOptions.override) {
      return body;
    ***REMOVED***

    if (body && 'errors' in body) {
      if (body.errors.title) {
        return {
          error: true,
          messages: body.errors.title,
        ***REMOVED***;
      ***REMOVED***
      return {
        error: true,
        messages: body.errors,
      ***REMOVED***;
    ***REMOVED***

    return body;
  ***REMOVED***

  parseErrors(status) {
    const err = {
      error: true,
    ***REMOVED***;
    switch (status) {
      case 401:
        return {
          ...err, messages: UNAUTHORIZED,
        ***REMOVED***;
      case 404:
        return {
          ...err, messages: NOT_FOUND,
        ***REMOVED***;
      case 500:
        return {
          ...err, messages: INTERNAL,
        ***REMOVED***;
      case 429:
        return {
          ...err, messages: RATE_LIMIT,
        ***REMOVED***;
      case 503:
        return {
          ...err, messages: OFFLINE,
        ***REMOVED***;
      case 406:
        return {
          ...err, messages: NOT_ACCEPTABLE,
        ***REMOVED***;
      default:
        return {
          ...err, messages: UNKNOWN,
        ***REMOVED***;
    ***REMOVED***
  ***REMOVED***

  status() {
    return fetch(this.options.status);
  ***REMOVED***

  execute(method = 'GET', endpoint = null) {
    const requestOptions = {
      ...this.options,
      method,
    ***REMOVED***;

    if (endpoint === null) {
      return new Error('HTTP Error: No endpoint to provide a request to.');
    ***REMOVED***

    requestOptions.url += endpoint;

    return new Promise((resolve, reject) => {
      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/property/100032470544?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryMockData,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/city/1001400?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/property?lat=39.4419892114799&lng=-75.6453718684964&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryMockData,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/city?lat=39.811250630443&lng=-75.4886086625372&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: cityById,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: summaryMockData,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property/450350219571?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property?lat=-75.6451595133313&lng=-75.6451595133313&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/hurricane/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: hurricaneProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property/450350219571?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property?lat=-75.6451595133313&lng=-75.6451595133313&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/tidal/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: tidalProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property/450350219571?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property?lat=-75.6451595133313&lng=-75.6451595133313&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/property?address=212%20appoquin%20s,%20middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviProperty,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city/1222175?key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city?lat=-75.6451595133313&lng=-75.6451595133313&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        ***REMOVED***);
      ***REMOVED***

      if (requestOptions.url === 'https://FAKE-HOST-FOR-TESTING.com/data/v0.1/market-value-impact/city?address=middletown,%20delware&key=aa.bb.cc') {
        return resolve({
          error: false,
          body: mviCity,
        ***REMOVED***);
      ***REMOVED***

      return reject({
        error: 'data not found',
      ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***

module.exports = Http;
