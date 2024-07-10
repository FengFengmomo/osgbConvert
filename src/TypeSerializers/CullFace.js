
import {FaceMode} from '../Enum/CullFace_FaceMode.js';
import {CullFace} from '../OsgTypes/CullFace.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {EnumSerializer} from '../Serializer/EnumSerializer.js';
import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';

let objectWrapper = new ObjectWrapper(
    "osg::CullFace",
    ["osg::Object", "osg::StateAttribute", "osg::CullFace"],
    CullFace
);

objectWrapper.addSerializer(new EnumSerializer("Mode",FaceMode,FaceMode.BACK));

ObjectWrapperManager.addWrapper(objectWrapper);