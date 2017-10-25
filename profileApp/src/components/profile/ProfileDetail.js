import React from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { inject, observer } from 'mobx-react';
import styles from '../../styles/Styles';

@inject('ProfileStore')
@observer
export default class ProfileDetail extends React.Component{
    constructor(props){
        super(props);
        const {ProfileStore} = this.props;

        this.state = {
            name: ProfileStore.selectedProfile.name,
            phone: ProfileStore.selectedProfile.phone,
            address: ProfileStore.selectedProfile.address,            
            photo_uri: ProfileStore.selectedProfile.photo_uri,
            index: this.props.navigation.state.params.index
        }
    }
    static navigationOptions = {
        title: 'Back to list',
     };

    removeProfile(){
        const {index} = this.state;
        const {navigation, ProfileStore} = this.props;
        ProfileStore.removeProfile(index);
        navigation.goBack();
    }

    render(){
        
        return (
            <View style={styles.detailCard}>
                 <Card title='Details' image = {{uri:this.state.photo_uri}} >
                    <Text style={{fontWeight: '500'}}> { this.state.name } </Text>
                    <Text> { this.state.phone } </Text>
                    <Text> { this.state.address } </Text>
                    <Button
                        icon={{name: 'remove', type:'font-awesome'}}
                        backgroundColor='red'
                        buttonStyle={{marginLeft: 0, marginRight: 0, marginTop: 15, marginBottom: 15}}
                        onPress={this.removeProfile.bind(this)}
                        title='Delete Profile' />
                 </Card>
            </View>
        )
    }
    
}
