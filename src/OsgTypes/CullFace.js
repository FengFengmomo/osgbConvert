
import {StateAttribute} from './StateAttribute.js';
import {FaceMode} from '../Enum/CullFace_FaceMode.js';

class CullFace extends StateAttribute{
    constructor(){
        super();
        this.Type = "osg::CullFace";
        this.Mode = FaceMode.BACK;
    }
}
export {CullFace};