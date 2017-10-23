'use strict';
import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    indexContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 280, 
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#517fa4'
    },
    headerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    headingText: {        
        marginTop: 10,
        fontSize: 22,
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 5
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 300
    },
    capturePic: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        marginBottom: 40,
        padding: 10,
        backgroundColor:'#517fa4',
        borderWidth: 1,
        borderColor: '#fff'
    },
    captureText:{
        color:'#fff',
        textAlign:'center',
    },
    detailCard:{
        flex:1,
        paddingTop: 50,
    },
});