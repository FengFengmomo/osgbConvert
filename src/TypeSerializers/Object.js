

import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {EnumSerializer} from '../Serializer/EnumSerializer.js';
import {ObjectSerializer} from '../Serializer/ObjectSerializer.js';
import {UserSerializer} from '../Serializer/UserSerializer.js';
import {PropByValSerializer} from '../Serializer/PropByValSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {ObjectClass} from '../OsgTypes/Object.js';
import {ObjectDataVariance} from '../Enum/ObjectData_Variance.js';

let objectWrapper = new ObjectWrapper(
    "osg::Object",
    ["osg::Object"],
    ObjectClass
);

function UserDataReader(){
    // TODO
    throw "UserDataReader not yet supported";
}

objectWrapper.addSerializer(new PropByValSerializer("String","Name",""));
objectWrapper.addSerializer(new EnumSerializer("DataVariance",ObjectDataVariance,ObjectDataVariance.UNSPECIFIED));

objectWrapper.addSerializer(new UserSerializer("UserData",UserDataReader, {maxVersion:76}));
objectWrapper.addSerializer(new ObjectSerializer("UserDataContainer",null, {minVersion:77}));

ObjectWrapperManager.addWrapper(objectWrapper);