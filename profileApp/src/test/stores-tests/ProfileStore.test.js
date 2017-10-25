import React from 'react';
import 'react-native';

const store = require('../../stores/ProfileStore').default;
describe('ProfileStore', () => {
  it('create profiles', () => {
    store.ProfileStore.addProfile({
      name: 'Test',
      phone: '3332',
      address: 'Test address',
      photo_uri: 'https://octicons.github.com/img/og/mark-github.png'
    });
    expect(store.ProfileStore.profiles.length).toBe(1);
  });

  it('add multiple profiles', () => {
    store.ProfileStore.addMultipleProfiles([
      {name: 'Test', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'},
      {name: 'Test 2', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'}      
    ]);
    expect(store.ProfileStore.profiles.length).toBeGreaterThan(1);
  });

  
});