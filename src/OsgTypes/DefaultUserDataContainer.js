import { UserDataContainer } from "./UserDataContainer.js";
class DefaultUserDataContainer extends UserDataContainer{
    constructor(){
        super();

        this.Type = "Osg::DefaultUserDataContainer";
    }
}
export { DefaultUserDataContainer };