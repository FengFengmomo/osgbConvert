
import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {MatrixSerializer} from '../Serializer/MatrixSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {MatrixTransform} from '../OsgTypes/MatrixTransform.js';

let objectWrapper = new ObjectWrapper(
    "osg::MatrixTransform",
    ["osg::Object", "osg::Node", "osg::Group", "osg::Transform", "osg::MatrixTransform"],
    MatrixTransform
);

objectWrapper.addSerializer(new MatrixSerializer("Mode"));

ObjectWrapperManager.addWrapper(objectWrapper);