'use strict';

const tilesetsService = require('../tilesets');
const tu = require('../../test/test-utils');

let tilesets;
beforeEach(() => {
  tilesets = tilesetsService(tu.mockClient());
});

describe('listTilesets', () => {
  test('works', () => {
    tilesets.listTilesets();
    expect(tu.requestConfig(tilesets)).toEqual({
      path: '/tilesets/v1/:ownerId',
      method: 'GET',
      params: {},
      query: {}
    });
  });

  test('works with query params', () => {
    tilesets.listTilesets({
      ownerId: 'specialguy',
      limit: 250,
      type: 'raster'
    });
    expect(tu.requestConfig(tilesets)).toEqual({
      path: '/tilesets/v1/:ownerId',
      method: 'GET',
      params: { ownerId: 'specialguy' },
      query: { limit: 250, type: 'raster' }
    });
  });
});

describe('tileJSONMetadata', () => {
  test('works', () => {
    tilesets.tileJSONMetadata({ tilesetId: 'hello-world' });
    expect(tu.requestConfig(tilesets)).toEqual({
      path: '/v4/:tilesetId.json',
      method: 'GET',
      params: { tilesetId: 'hello-world' }
    });
  });
});
