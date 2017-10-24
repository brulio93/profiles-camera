import React from 'react';
import 'react-native';
import ProfileStore from '../stores/ProfileStore';

describe('ProfileStore', () => {
  test('create profiles', () => {
    
    profileStore.addProfile({
      name: 'Test',
      phone: '3332',
      address: 'Test address',
      photo_uri: 'https://octicons.github.com/img/og/mark-github.png'
    });
    expect(store.profiles.length).toBe(2);
  });
});