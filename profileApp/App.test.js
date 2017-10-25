import React from 'react';
import 'react-native';
import App from './App';
import renderer from 'react-test-renderer';
import Enzyme from "enzyme";

const mockCamera = require('./src/mocks/Camera').default;
const ProfileStore = require('./src/stores/ProfileStore').default;
jest.mock('react-native-camera', () => mockCamera);

it('renders without crashing', () => {
  const wrapper = renderer.create(<App />);
  expect(wrapper).toMatchSnapshot();
});