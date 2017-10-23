import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Profile from '../../src/components/profile/Profile';
import MyList from '../../src/components/list/List';
import CameraComp from '../../src/components/camera-comp/CameraComp';
import ProfileDetail from '../../src/components/profile/ProfileDetail';
import ImportProfiles from '../../src/components/profile/ImportProfiles';

const StackNav = StackNavigator({
    List: {screen: MyList},
    ProfileDetail: {screen: ProfileDetail}
},{
    initialRouteName: 'List'
});

export default TabNav = TabNavigator({
    Home: { 
        screen: StackNav, 
        navigationOptions: {
            tabBarLabel: 'List',
        },
     },
    Profile: { 
        screen: Profile, 
        navigationOptions: {
            tabBarLabel: 'Contact',
        },
      },
    ImportProfiles: {
        screen: ImportProfiles,
        navigationOptions: {
            tabBarLabel: 'Import'
        },
    }
},
{
    initialRouteName: 'Home',
    tabBarOptions: {
        style: {
            backgroundColor: '#33691E',
          },
      },
});

