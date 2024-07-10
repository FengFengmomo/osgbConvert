import { ObjectClass } from "./Object.js";
class UserDataContainer extends ObjectClass{
    constructor(){
        super();

        this.DescriptionList = [];
        this.ObjectList = [];
        this.UserData = null;

        this.Type = "Osg::UserDataContainer";
    }
}
export {    UserDataContainer };