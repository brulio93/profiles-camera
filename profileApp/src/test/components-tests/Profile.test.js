import React from 'react';
import 'react-native';
import Profile from '../../components/profile/Profile';
import renderer from 'react-test-renderer';

const mockCamera = require('../../mocks/Camera').default;
const ProfileStore = require('../../stores/ProfileStore').default;

jest.mock('react-native-camera', () => mockCamera);

describe('Create a component', () => { 
  test('renders correctly', () => {
    const render = renderer.create(<Profile ProfileStore={ProfileStore.ProfileStore}/>).toJSON();
    expect(render).toMatchSnapshot();
  });
});
