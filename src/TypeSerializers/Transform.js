
import {ObjectWrapperManager}from '../Serializer/ObjectWrapperManager.js';
import {EnumSerializer}from '../Serializer/EnumSerializer.js';
import {ObjectWrapper}from '../Serializer/ObjectWrapper.js';
import {Transform}from '../OsgTypes/Transform.js';
import {ReferenceFrame}from '../Enum/Transform_ReferenceFrame.js';

let objectWrapper = new ObjectWrapper(
    "osg::Transform",
    ["osg::Object", "osg::Node", "osg::Group", "osg::Transform"],
    Transform
);

objectWrapper.addSerializer(new EnumSerializer("Mode", ReferenceFrame, ReferenceFrame.RELATIVE_RF));

ObjectWrapperManager.addWrapper(objectWrapper);