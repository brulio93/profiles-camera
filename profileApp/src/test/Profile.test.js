import React from 'react';
import 'react-native';
import Profile from '../components/profile/Profile';
import renderer from 'react-test-renderer';
import mockCamera from '../mocks/Camera';

jest.mock('react-native-camera', () => {
  return mockCamera;
});

describe('Create a component', () => { 
  test('renders correctly', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
