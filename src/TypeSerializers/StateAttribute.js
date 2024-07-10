
import {ObjectWrapperManager } from '../Serializer/ObjectWrapperManager.js';
import {ObjectCallbackSerializer} from '../Serializer/ObjectCallbackSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {StateAttribute} from '../OsgTypes/StateAttribute.js';

let objectWrapper = new ObjectWrapper(
    "osg::StateAttribute",
    ["osg::Object", "osg::StateAttribute"],
    StateAttribute
);

objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));

ObjectWrapperManager.addWrapper(objectWrapper);