import React from 'react';
import 'react-native';
const fetchMock = require('fetch-mock');

const store = require('../../stores/ImportStore').default;
const url = 'https://jsonplaceholder.typicode.com/users';
const badUrl = 'http//url.test';

describe('ImportStore', () => {
  it('get profiles', async () => {
    fetchMock.get(url, {first_name: "George"});
    const result = await store.ImportStore.getProfiles(url);
    expect(result).toEqual({"first_name": "George"});
  });

  it('bad or unexpected url', async () =>{
    fetchMock.get(badUrl, {
      status: 400,
      body: JSON.stringify("Network request failed")
    });
    const result =  await store.ImportStore.getProfiles(badUrl);
    expect(result).toMatch('Network request failed');  
  });
});