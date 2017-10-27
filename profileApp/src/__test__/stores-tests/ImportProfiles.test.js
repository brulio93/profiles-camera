import React from 'react';
import 'react-native';
const fetchMock = require('fetch-mock');

const store = require('../../stores/ImportStore').default;
const url = 'https://jsonplaceholder.typicode.com/users';

describe('ImportStore', () => {
  it('get profiles', async () => {
    fetchMock.get(url, {first_name: "George"});
    const result = await store.ImportStore.getProfiles(url);
    expect(result).toEqual({"first_name": "George"});
  });

  it('handle errors', async () =>{
    fetchMock.get(url + '/error', {
      status: 400,
      body: JSON.stringify("error data")
    });
    const result = await store.ImportStore.getProfiles(url + '/error');
    expect(result).toThrow();  
  });
});