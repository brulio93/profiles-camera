import React from 'react';
import 'react-native';
import App from './App';
import renderer from 'react-test-renderer';
import mockCamera from './src/mocks/Camera';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native-camera', () => {
  return mockCamera;
});

it('renders without crashing', () => {
  const wrapper = mount(<App store={ProfileStore} />);
  expect(wrapper.find("Provider").props()).toBe("");
});