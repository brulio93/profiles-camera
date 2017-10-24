import React from 'react';
import Enzyme from 'enzyme';
import MyList from '../components/list/List';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});
describe('ProfilesList', function() {
    beforeEach(function(){
        this.store = {
            filteredProfiles: [
                {name: 'Test1', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'},
                {name: 'Test2', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'},
                {name: 'Test3', phone: '3332', address: 'Test address', photo_uri: 'https://octicons.github.com/img/og/mark-github.png'}
            ],
            filter: "test",
            addProfile: (val) => {
                this.createProfileCalled = true
                this.profileValue = val
            },
        }
    });

    it("render filtered profiles", function(){
        const wrapper = mount(<MyList store={this.store} />)
        expect(wrapper.find("Card ListItem").at(0).text()).toBe("Test1");
    });
});
