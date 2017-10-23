import {computed, observable, action} from 'mobx';

class _ImportStore{
    @observable url = '';
    @observable data = undefined;

    constructor(){
        
    }

    @action getProfiles(serviceUrl){
        fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
            this.data = responseData;
        })
        .catch((error) => {
           Alert.alert(`Error: ${error}`);
           console.error(error);
        });
        return this.data;
    }
}

const ImportStore = new _ImportStore();

export default {ImportStore: ImportStore}