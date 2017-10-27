import React from 'react';
import { View, Text, TextInput, Alert, Keyboard, AsyncStorage} from 'react-native';
import { Icon, Card, ListItem, FormInput, Button } from 'react-native-elements';
import styles from '../../styles/Styles';
import CameraComp from '../../components/camera-comp/CameraComp';
import { observer, inject } from 'mobx-react';

@inject('ProfileStore')
@observer
export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            photo_uri: null,
            isCameraOn: false
        };
    }
    static navigationOptions = {
        title: null,
        headerBackTitle: null,
        header: null
     }; 


    componentDidMount(){
        const {ProfileStore} = this.props.ProfileStore;
        var global = this;

        AsyncStorage.getItem(ProfileStore.StorageUrl)
        .then((val) => { if(val){ global.props.ProfileStore.ProfileStore.profiles = JSON.parse(val); }} ).done();
    }
    createProfile(){
        const {navigation, ProfileStore} = this.props;
        try{
            ProfileStore.ProfileStore.addProfile({
                name: this.state.name,
                phone: this.state.phone,
                address: this.state.address,
                photo_uri: this.props.ProfileStore.ProfileStore.photo_uri
            });
        }
        catch(error){
            console.log(`Error: ${error}`);
        }
        navigation.goBack();
    }
    saveProfile(){
        if(this.state.name && this.state.phone && this.state.address){
            this.createProfile();            
            this.setState({
                name: '',
                phone: '',
                address: '',
                photo_uri: ''
            });           
            Alert.alert('Contact Saved');
        }
        else {
            Alert.alert('Fill all the fields');
        }
    }

    checkCamera(){
        if(this.state.isCameraOn){
            this.setState({
                isCameraOn: false,
            });
        } else {
            this.setState({
                isCameraOn: true,
            });
        }
    }
    
    renderCamera(){
        let content = null;
        if(this.state.isCameraOn){
            content = <Card title = 'Take a photo'>
                <View style={{height: 250}}>
                    <CameraComp toggleFunction = {this.checkCamera.bind(this)} />
                </View>
            </Card>
        }
        else {
            content = (            
                <Card title='Profile' image = { { uri: this.state.photo_uri || this.props.ProfileStore.ProfileStore.photo_uri } } >
                    <TextInput style={styles.textInput} placeholder="Name" onChangeText={(name) => this.setState({name})} value = {this.state.name} />
                    <TextInput style={styles.textInput} keyboardType='numeric' placeholder="Phone" onChangeText={(phone) => this.setState({phone})} value = {this.state.phone}/>
                    <TextInput style={styles.textInput} placeholder="Address" onChangeText={(address) => this.setState({address})} value = {this.state.address}/>
                </Card>
        );
        }
        return content; 
    }

    render(){
        let content = this.renderCamera();
        return(
            <View style={styles.indexContainer}>
                {content}                 
                <View style={{width: 300, padding: 10}}>
                    <Button style={styles.button} icon={{name: "camera", type: "font-awesome"}} backgroundColor="#00796B" onPress = {this.checkCamera.bind(this)} title="Change Picture"/>
                </View>                
                
                <View style={{width: 300, padding: 10}}>
                    <Button icon={{name: 'plus', type: 'font-awesome'}} backgroundColor="#517fa4" onPress = {this.saveProfile.bind(this)} title = 'Save Contact' />
                </View>               

            </View>
        );
    }
}