import React from 'react';
import Profile from '../components/profile/Profile';
import renderer from 'react-test-renderer';
import ProfileStore from '../stores/ProfileStore';
 
describe('ProfileStore', () => {
    it('create profiles', () => {
      const profile = new ProfileStore
      profile.addProfile({
        name: 'Test',
        phone: '3332',
        address: 'Test address',
        photo_uri: 'https://octicons.github.com/img/og/mark-github.png'
      });
      expect(store.profiles.length).toBe(1);
    });
});