import React from 'react';
import 'react-native';
import CameraComp from '../../components/camera-comp/CameraComp';
import renderer from 'react-test-renderer';
import mockCamera from '../../mocks/Camera';

const ProfileStore = require('../../stores/ProfileStore').default;

jest.mock('react-native-camera', () => mockCamera);
describe('Camera component', () => {
    test('create camera correctly', () => {
        const render = renderer.create(
            <CameraComp ProfileStore={ProfileStore.ProfileStore}/>
        ).toJSON();
        expect(render).toMatchSnapshot();
    });
});
