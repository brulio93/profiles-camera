import React from 'react';
import 'react-native';
const fetchMock = require('fetch-mock');

const store = require('../../stores/ImportStore').default;
const url = 'https://jsonplaceholder.typicode.com/users';

describe('ImportStore', () => {
  it('get profiles', async () => {
    fetchMock.get(url, {first_name: "George"});
    const profiles = await store.ImportStore.getProfiles(url);
    expect(profiles[0].first_name).toBe("George");
  });
});