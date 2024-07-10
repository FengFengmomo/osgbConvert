
import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {UserSerializer} from '../Serializer/UserSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {Geode} from '../OsgTypes/Geode.js';

let objectWrapper = new ObjectWrapper(
    "osg::Geode",
    ["osg::Object","osg::Node","osg::Geode"],
    Geode
);

function readDrawables(inputStream,geodeNode){
    let size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    for (let i=0;i<size;i++){
        let obj = inputStream.readObjectOfType("osg::Drawable");
        if (obj) {
            geodeNode.Children.push(obj);
        }
    }
    inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("Drawables",readDrawables));

ObjectWrapperManager.addWrapper(objectWrapper);