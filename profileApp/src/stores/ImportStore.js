import {computed, observable, action} from 'mobx';

class _ImportStore{
    @observable url = '';
    @observable data = [];

    @action async getProfiles(url){
        const response = await fetch(url);
        const responseData = response.json();
        if(response.status === 200){
            this.data = responseData;
        }
        
    }
}

const ImportStore = new _ImportStore();

export default {ImportStore: ImportStore}