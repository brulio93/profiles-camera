import {computed, observable, action} from 'mobx';

class _ImportStore{
    @observable url = '';
    @observable data = [];
    @observable dataObject = {};

    @action async getProfiles(url){
        try{
            let response = await fetch(url);
            let responseJson = await response.json();
            this.data = responseJson.data == undefined ? responseJson : responseJson.data;
            return this.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    @action selectedProfileToImport(profile){
        let temp = this.data;  
        temp.map((dataSelected, i) => {
            if(profile.id === dataSelected.id){
                dataSelected.isSelected = !dataSelected.isSelected;
                return;
            }
        });
        return this.data;        
    }    

}

const ImportStore = new _ImportStore();

export default {ImportStore: ImportStore}