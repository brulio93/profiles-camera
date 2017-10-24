import { computed, observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';

class ProfileListStore {
    @observable photo_uri = 'https://octicons.github.com/img/og/mark-github.png';
    @observable profiles = [];
    @observable selectedProfile = {};
    @observable storageKey = 'compData';

    @computed get StorageUrl(){
        return this.storageKey;
    }

    @computed get showProfilesList(){
        return this.profiles;
    }
    
    @action profileSelected(profile){
        this.selectedProfile = profile;
    }

    @action addProfile(profile){
        this.photo_uri = 'https://octicons.github.com/img/og/mark-github.png';
        this.profiles.push(profile);
        AsyncStorage.setItem(this.StorageUrl, JSON.stringify(this.profiles));
    }


    @action addMultipleProfiles(profiles) {
        [].push.apply(this.profiles, profiles);
        AsyncStorage.setItem(this.StorageUrl, JSON.stringify(this.profiles));
    }

    @action removeProfile(index){
        this.profiles.splice(index, 1);
        AsyncStorage.setItem(this.StorageUrl, JSON.stringify(this.profiles));
    }

}

const ProfileStore = new ProfileListStore();

export default {ProfileStore: ProfileStore};