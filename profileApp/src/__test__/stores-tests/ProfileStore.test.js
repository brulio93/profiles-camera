import React from 'react';
import 'react-native';
import Profile from '../../__mocks__/Profile';


const store = require('../../stores/ProfileStore').default;
const profileMock_1 = new Profile('Test', '32323', 'liberia', 'https://octicons.github.com/img/og/mark-github.png');
const profileMock_2 = new Object();


describe('ProfileStore', () => {
  it('create profiles', () => {
    store.ProfileStore.addProfile(profileMock_1);
    expect(store.ProfileStore.profiles.length).toBe(1);
  });

  it('should not create profile', () => {
    store.ProfileStore.addProfile(null);
    expect(store.ProfileStore.profiles.length).toBeLessThan(2);
  });

  it('add multiple profiles', () => {
    store.ProfileStore.addMultipleProfiles([
      {name: 'Test', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'},
      {name: 'Test 2', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'}      
    ]);
    expect(store.ProfileStore.profiles.length).toBeGreaterThan(1);
  });

  it('delete a profile', () => {
    store.ProfileStore.removeProfile(1);
    expect(store.ProfileStore.profiles.length).toBeLessThan(3);
  });
});