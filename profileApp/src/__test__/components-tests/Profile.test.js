import 'react-native';
import React from 'react';
import Enzyme from 'enzyme';
import Profile from '../../components/profile/Profile';
import renderer from 'react-test-renderer';
import {render, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const ProfileStore = require.requireActual('../../stores/ProfileStore').default;
Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native-camera', () => require.requireActual('../../__mocks__/Camera').default);

describe('Create a component', () => { 
  it('use shallow to render the component', () => {
    const wrapper = shallow(<Profile ProfileStore={ProfileStore.ProfileStore}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
