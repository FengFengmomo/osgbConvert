

import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {EnumSerializer} from '../Serializer/EnumSerializer.js';
import {UserSerializer} from '../Serializer/UserSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {Material} from '../OsgTypes/Material.js';
import {ColorMode} from '../Enum/Material_ColorMode.js';

let objectWrapper = new ObjectWrapper(
    "osg::Material",
    ["osg::Object", "osg::StateAttribute", "osg::Material"],
    Material
);

function readMaterialFunc(property, type){
    function reader(inputStream, material){
        // todo create function "readType" this in inputStream; also exist in typeReaderFunction
        let readerFunc;
        if(type === "Float"){
            readerFunc = inputStream.inputOperator.readFloat.bind(inputStream.inputOperator);
        } else if(type === "Vec4f") {
            readerFunc = function () {
                return inputStream.readVectorOfType(4,"Float");
            }
        } else {
            throw "serializeMaterial - type not supported"
        }
        let frontAndBack = inputStream.inputOperator.readBool();
        inputStream.readProperty("Front");
        let value1 = readerFunc();
        inputStream.readProperty("Back");
        let value2 = readerFunc();
        if(frontAndBack){
            material[property + "FrontAndBack"] = true;
            material[property + "Front"] = value1;
            material[property + "Back"] = value1;
        } else {
            material[property + "FrontAndBack"] = false;
            material[property + "Front"] = value1;
            material[property + "Back"] = value2;
        }
    }
    return reader;
}

objectWrapper.addSerializer(new EnumSerializer("ColorMode", ColorMode, ColorMode.OFF));

objectWrapper.addSerializer(new UserSerializer("Ambient", readMaterialFunc("Ambient","Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Diffuse", readMaterialFunc("Ambient","Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Specular", readMaterialFunc("Ambient","Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Emission", readMaterialFunc("Ambient","Vec4f")));
objectWrapper.addSerializer(new UserSerializer("Shininess", readMaterialFunc("Ambient","Float")));

ObjectWrapperManager.addWrapper(objectWrapper);