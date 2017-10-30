import 'react-native';
import React from 'react';
import Enzyme from 'enzyme';
import MyList from '../../components/list/List';
import renderer from 'react-test-renderer';
import {render, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const ProfileStore = require.requireActual('../../stores/ProfileStore').default;

Enzyme.configure({adapter: new Adapter()});

describe('ProfilesList', () => {
    it('render the component', () =>{
        const wrapper = shallow(<MyList ProfileStore={ProfileStore.ProfileStore} />)
        expect(wrapper).toMatchSnapshot();
    });
});
