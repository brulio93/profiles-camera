import React from 'react';
import { Text, StyleSheet, Image, View, ScrollView, Alert} from 'react-native';
import { ListItem, Button, Card } from 'react-native-elements'
import styles from '../../styles/Styles';
import {observer, inject} from 'mobx-react';
import {StackNavigator} from 'react-navigation';

@inject('ProfileStore')
@observer
export default class MyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profilesSelected: [],
        }
    }
    static navigationOptions = {
        title: null,
        headerBackTitle: null,
        header: null
    }

    displayProfile(profile, index){
        const {navigate} = this.props.navigation;             
        this.props.ProfileStore.profileSelected(profile);
        navigate("ProfileDetail", {"index": index});
    }

    setProfile(index){
        const profiles = this.state.profilesSelected;
        profiles.push(index);
        this.setState({profilesSelected})
    }

    render(){
        const {ProfileStore} = this.props;
        const {profilesSelected} = this.state;
        return(
            <ScrollView>
                <Card title = "List of Contacts">
                    {
                        ProfileStore.profiles.map((profile, i) => (
                            <ListItem roundAvatar avatar = {{uri: profile.photo_uri}} 
                                      title = {profile.name}
                                      key = {i}
                                      onPress = {this.displayProfile.bind(this, profile, i)} 
                                      onLongPress = {this.setProfile.bind(this, i)}
                                      containerStyle = {{ backgroundColor: profilesSelected.indexOf(i) >= 0 ? "#f1f1f1" : "#ffffff"}}
                            />
                        ))
                    }
                </Card>    
            </ScrollView>
        );
    }
}