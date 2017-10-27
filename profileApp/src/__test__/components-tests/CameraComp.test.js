import 'react-native';
import React from 'react';
import CameraComp from '../../components/camera-comp/CameraComp';
import renderer from 'react-test-renderer';

const ProfileStore = require('../../stores/ProfileStore').default;

jest.mock('react-native-camera', () => require.requireActual('../../__mocks__/Camera').default);
describe('Camera component', () => {
    test('create camera correctly', () => {
        const render = renderer.create(
            <CameraComp ProfileStore={ProfileStore.ProfileStore}/>
        ).toJSON();
        expect(render).toMatchSnapshot();
    });
});
