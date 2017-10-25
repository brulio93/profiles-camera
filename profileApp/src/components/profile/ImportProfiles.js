import React from 'react';
import {View, Text, Alert, ScrollView, Picker} from 'react-native';
import { ListItem, Button, Card, List } from 'react-native-elements'
import styles from '../../styles/Styles';
import {inject, observer} from 'mobx-react';
import ProfileStore from '../../stores/ProfileStore';

@inject('ProfileStore')
@observer
export default class ImportProfiles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            serviceUrl: 'https://jsonplaceholder.typicode.com/users',
            data: undefined, 
            isLoading: false
        };
    }


    componentDidMount(){
        this.getData();
    }

    async getData(url = this.state.serviceUrl){
        this.setState({
            data: undefined
        });
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.data || responseData,
                    serviceUrl: url,
                });
                return responseData;
            })
            .catch((error) => {
               Alert.alert(`Error: ${error}`);
               console.error(error);
            });
    }

    selectObject(selectedObject){
        var temp = this.state.data;
        temp.map((dataObject, i) =>{
            if(selectedObject.id === dataObject.id){
                dataObject.isSelected = !dataObject.isSelected;
                return;
            }
        });

        this.setState({data:temp});
    }
    getSelectedObject (){ 
        if(this.state.data){
            return this.state.data.filter((object, i) => { return object.isSelected; });
        }        
        return [];
    }
    getAvailableData(){
        if(this.state.data){
            var dataArr = [];
            this.state.data.map((dataObject, i) =>{
                dataArr.push(<ListItem
                        onPress = {() => this.selectObject(dataObject)}
                        key = {i}
                        subtitle = {dataObject.username || dataObject.first_name}
                        title = {dataObject.name || dataObject.last_name}
                        rightTitle = {dataObject.phone}
                        containerStyle = {{backgroundColor: dataObject.isSelected ? "#DCEDC8" : "#ffffff"}}
                        />);
            });
            return dataArr;
        }
        return;
    }

    dissmisSelectedObjects(){
        var temp = this.state.data;
        temp.map((dataObject, i) => { dataObject.isSelected = false; });
        this.setState({data:temp});
    }

    importToProfiles(){
        debugger
        const { ProfileStore } = this.props;
        const  selectedObject = this.getSelectedObject();
        var temp = [];
        if(selectedObject.length){
            selectedObject.map((objectData, i) => {
                temp.push({
                    name: objectData.name || objectData.first_name,
                    phone: objectData.phone || 'none',
                    address: 'Test' || 'Test address',
                    photo_uri: objectData.avatar || 'https://octicons.github.com/img/og/mark-github.png'
                });
            });
            ProfileStore.addMultipleProfiles(temp);
            this.dissmisSelectedObjects();
        }

    }

    getUrl(itemValue){
        this.getData(itemValue);
    }

    renderDataList(){
        if(this.state.data){
        return  <List>{ this.getAvailableData() }</List>
        }
        return;
    }


    render(){
        const counter = this.getSelectedObject();
        return(
            <ScrollView>
                <Card title = "Data Access">
                    <Picker selectedValue = {this.state.serviceUrl} onValueChange = {(itemValue) => this.getUrl(itemValue)}>
                        <Picker.Item label = "Typicode" value = "https://jsonplaceholder.typicode.com/users"/>
                        <Picker.Item label = "Reqres" value = "https://reqres.in/api/users" />
                    </Picker>
                    <Text>{this.props.isLoading ? 'Loading...' : ''} </Text>
                </Card>

                <Card title = "Profiles">
                    <Text style = {{fontWeight: '800'}}>Profiles availables</Text>
                    <Text>Selectd {counter.length}</Text>
                    {
                        counter.length > 0 &&
                        <Button 
                            onPress = {this.importToProfiles.bind(this)}
                            icon = {{name: 'share', type: 'font-awesome'}}
                            backgroundColor = "#1A237E"
                            buttonStyle={{marginTop: 10}}
                            title =  'Import Selected Profile' 
                        />
                    }
                    {
                        this.renderDataList()
                    }
                </Card>
            </ScrollView>
        );
    }
}