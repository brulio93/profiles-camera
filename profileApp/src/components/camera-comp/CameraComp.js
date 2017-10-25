import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';
import styles from '../../styles/Styles';
import {inject, observer} from 'mobx-react';

@inject(['ProfileStore'])
@observer
export default class CameraComp extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Camera',
        headerBackTitle: null
    })

    takePicture(){
        const options = {};
        this.camera.capture({metadata: options})
          .then((data) => {
                this.props.ProfileStore.photo_uri = data.path;
                this.props.toggleFunction();
                return console.log(data)
            })
          .catch(err => console.error(err));
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.cameraContainer}>
                    <Camera ref={(cam) => {this.camera = cam}} style={styles.preview} aspect={Camera.constants.Aspect.fill}>                    
                    </Camera>
                </View>              
                
                <View>
                    <TouchableHighlight style={styles.capturePic} onPress = {this.takePicture.bind(this)}>
                        <Text style={styles.captureText}>Take a Photo</Text>                                             
                    </TouchableHighlight>      
                </View>
            </View>
        );
    }
}