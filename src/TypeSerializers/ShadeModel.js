
import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {EnumSerializer} from '../Serializer/EnumSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {ShadeModel} from '../OsgTypes/ShadeModel.js';
import {ShadeModel_Mode} from '../Enum/ShadeModel_Mode.js';

let objectWrapper = new ObjectWrapper(
    "osg::ShadeModel",
    ["osg::Object", "osg::StateAttribute", "osg::ShadeModel"],
    ShadeModel
);

objectWrapper.addSerializer(new EnumSerializer("Mode", ShadeModel_Mode, ShadeModel_Mode.SMOOTH));

ObjectWrapperManager.addWrapper(objectWrapper);