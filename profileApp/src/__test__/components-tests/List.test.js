import 'react-native';
import React from 'react';
import Enzyme from 'enzyme';
import MyList from '../../components/list/List';
import renderer from 'react-test-renderer';
import {render, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { ListItem } from 'react-native-elements'

const ProfileStore = require('../../stores/ProfileStore').default;

Enzyme.configure({adapter: new Adapter()});

function mockProfiles(){
    const profiles = [{name: 'Test', phone: '3332', address: 'Test address', photo_uri: 'none'},
    {name: 'Test 2', phone: '3332', address: 'Test address', photo_uri: 'none'}];
    ProfileStore.ProfileStore.addMultipleProfiles(profiles);
    return ProfileStore.ProfileStore.profiles;
}

describe('ProfilesList', () => {
    it('render the component', () =>{
        const wrapper = shallow(<MyList ProfileStore={ProfileStore.ProfileStore} />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a ListItem', () => {
        const wrapper = shallow(<MyList ProfileStore={ProfileStore.ProfileStore}/>);
        expect(wrapper.find('ListItem').exists).toBeTruthy();
    });

    //Needs to be improved
    it('click list item', () => {
        const profiles = mockProfiles();
        const wrapper = shallow(<MyList ProfileStore={ProfileStore.ProfileStore} />)        
        const render = wrapper.dive();
        const displayProfile = sinon.spy(MyList, "displayProfile");
        render.find(ListItem).forEach(child => {
            child.simulate('onPress');
        });
        expect(displayProfile.calledOnce).toBe(true);
    });
});
