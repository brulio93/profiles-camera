import React from 'react';
import 'react-native';
import CameraComp from '../components/camera-comp/CameraComp';
import renderer from 'react-test-renderer';
import mockCamera from '../mocks/Camera';

jest.mock('react-native-camera', () => {
    return mockCamera;
});
describe('Create component', () => {
    test('create camera correctly', () => {
        const tree = renderer.create(
            <CameraComp />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
