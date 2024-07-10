import { Group } from './Group.js';
class Transform extends Group{
    constructor(){
        super();
        this.Type = "osg::Transform";

        this.ReferenceFrame = 0;
    }
}
export {Transform};