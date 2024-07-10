
import {ObjectWrapperManager} from '../Serializer/ObjectWrapperManager.js';
import {UserSerializer} from '../Serializer/UserSerializer.js';
import {EnumSerializer} from '../Serializer/EnumSerializer.js';
import {PropByValSerializer} from '../Serializer/PropByValSerializer.js';
import {ObjectCallbackSerializer} from '../Serializer/ObjectCallbackSerializer.js';
import {ObjectWrapper} from '../Serializer/ObjectWrapper.js';
import {StateSet} from '../OsgTypes/StateSet.js';
import {RenderingHint} from '../Enum/StateSet_RenderingHint.js';
import {RenderBinMode} from '../Enum/StateSet_RenderBinMode.js';
import {StateAttributeValue} from '../Enum/StateAttribute_Value.js';
import {DataTypes} from '../Common/DataTypes.js';
let objectWrapper = new ObjectWrapper(
    "osg::StateSet",
    ["osg::Object", "osg::StateSet"],
    StateSet
);

// TODO ALL of reader functions are not exactly like in OGS repo. maybe need to be rewriten
// readModeList, readAttributeList, readTextureModeList, readTextureAttributeList,readUniformList,readDefineList

function readModes(inputStream) {
    let size = inputStream.inputOperator.readUInt();
    let modes = [];
    if (size > 0) {
        inputStream.readBeginBracket();
        for (let i = 0; i < size; i++) {
            let mode = new DataTypes.ObjectGLEnum();
            inputStream.inputOperator.readGLEnum(mode);

            modes.push({
                key: mode.value,
                value: readValue(inputStream)
            });
        }
        inputStream.readEndBracket();
    }
    return modes;
}

function readAttributes(inputStream) {
    let attributes = [];
    let size = inputStream.inputOperator.readUInt();
    if (size > 0) {
        inputStream.readBeginBracket();
        for (let i = 0; i < size; i++) {
            let sa = inputStream.readObjectOfType("osg::StateAttribute");
            inputStream.readProperty("Value");
            let value = readValue(inputStream);
            if (sa) {
                attributes.push({
                    key: sa.getTypeMemberPair(),
                    value: {
                        StateAttribute: sa,
                        Value: value
                    }
                })
            }
        }
        inputStream.readEndBracket();
    }
    return attributes;
}

function readValue(inputStream) {
    if (inputStream.isBinary())
        return inputStream.inputOperator.readInt();
    else {
        let enumValue = inputStream.inputOperator.readString();
        let value = 0;
        if (enumValue.indexOf("OFF") >= 0) value = StateAttributeValue.OFF;
        if (enumValue.indexOf("ON") >= 0) value = StateAttributeValue.ON;
        if (enumValue.indexOf("OVERRIDE") >= 0) value = value | StateAttributeValue.OVERRIDE;
        if (enumValue.indexOf("PROTECTED") >= 0) value = value | StateAttributeValue.PROTECTED;
        if (enumValue.indexOf("INHERIT") >= 0) value = value | StateAttributeValue.INHERIT;
        return value;
    }
}

function readModeList(inputStream, stateSet) {
    let modes = readModes(inputStream);
    stateSet.ModeList.push(...modes);
    return true;
}

function readAttributeList(inputStream, stateSet) {
    let modes = readAttributes(inputStream);
    stateSet.AttributeList.push(...modes);
}

function readTextureModeList(inputStream, stateSet) {
    let size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    for (let i = 0; i < size; i++) {
        inputStream.readProperty("Data");
        stateSet.TextureModeList.push(...readModes(inputStream));
    }
}

function readTextureAttributeList(inputStream, stateSet) {
    let size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    for (let i = 0; i < size; i++) {
        inputStream.readProperty("Data");
        stateSet.TextureAttributeList.push(...readAttributes(inputStream))
    }
    inputStream.readEndBracket();
}

function readDefineList(inputStream, stateSet) {
    let size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    for (let i = 0; i < size; i++) {
        let defineName = inputStream.inputOperator.readWrappedString();
        let defineValue = inputStream.inputOperator.readWrappedString();
        inputStream.inputOperator.readObjectProperty(inputStream.PROPERTY.set("Value"));
        let overrideValue = readValue(inputStream);

        stateSet.DefineList[defineName] = {
            DefineValue: defineValue,
            OverrideValue: overrideValue
        };
    }
    inputStream.readEndBracket();
}

function readUniformList(inputStream, stateSet) {
    let size = inputStream.inputOperator.readUInt();
    inputStream.readBeginBracket();
    for (let i = 0; i < size; i++) {
        let uniform = inputStream.readObjectOfType("osg::Uniform");
        inputStream.inputOperator.readObjectProperty(inputStream.PROPERTY.set("Value"));
        let value = readValue(inputStream);

        if (uniform) {
            stateSet.UniformList.push({
                Uniform: uniform,
                Value: value
            })
        }
    }
    inputStream.readEndBracket();
}

objectWrapper.addSerializer(new UserSerializer("ModeList", readModeList));
objectWrapper.addSerializer(new UserSerializer("AttributeList", readAttributeList));
objectWrapper.addSerializer(new UserSerializer("TextureModeList", readTextureModeList));
objectWrapper.addSerializer(new UserSerializer("TextureAttributeList", readTextureAttributeList));
objectWrapper.addSerializer(new UserSerializer("UniformList", readUniformList));
objectWrapper.addSerializer(new PropByValSerializer("Int", "RenderingHint", RenderingHint.DEFAULT_BIN));

objectWrapper.addSerializer(new EnumSerializer("RenderBinMode", RenderBinMode, RenderBinMode.DEFAULT_BIN));

objectWrapper.addSerializer(new PropByValSerializer("Int", "BinNumber", 0));
objectWrapper.addSerializer(new PropByValSerializer("String", "BinName", ""));
objectWrapper.addSerializer(new PropByValSerializer("Bool", "NestRenderBins", true));
objectWrapper.addSerializer(new ObjectCallbackSerializer("UpdateCallback"));
objectWrapper.addSerializer(new ObjectCallbackSerializer("EventCallback"));

objectWrapper.addSerializer(new UserSerializer("DefineList", readDefineList, {minVersion: 151}));

ObjectWrapperManager.addWrapper(objectWrapper);