import React from 'react';
import CameraComp from '../components/camera-comp/CameraComp';
import renderer from 'react-test-renderer';

test('create camera correctly', () =>{
    const tree = renderer.create(
        <CameraComp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});