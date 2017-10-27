import React from 'react';
import Enzyme from 'enzyme';
import MyList from '../components/list/List';
import renderer from 'react-test-renderer';
const ProfileStore = require('../stores/ProfileStore').default;

describe('ProfilesList', function() {
    it("render filtered profiles", function(){
        const render = renderer.create(<MyList ProfileStore={ProfileStore.ProfileStore} />);
        expect(render).toMatchSnapshot();
    });
});
