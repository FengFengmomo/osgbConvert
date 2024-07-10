import {Transform} from './Transform.js';

class MatrixTransform extends Transform{
    constructor(){
        super();
        this.Type = "osg::MatrixTransform";

        this.Matrix = null;
    }
}
export {MatrixTransform};