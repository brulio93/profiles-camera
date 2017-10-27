export default class Profile{
    name: string;
    phone: string;
    address: string;
    photo_uri: string;

    constructor(name, phone, address, photo_uri){
        this.name = name;
        this.phone = phone;
        this.address = address,
        this.photo_uri = photo_uri
    }
}