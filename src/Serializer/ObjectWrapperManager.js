import { GLEnum } from '../Enum/GLEnum.js';
import { ArrayTableEnum } from '../Enum/ArrayTableEnum.js';
import { PrimitiveTableEnum} from '../Enum/PrimitiveTableEnum.js';
import { ObjectWrapper } from './ObjectWrapper.js';
const _globalMap = {
    ArrayType: ArrayTableEnum,
    PrimitiveType: PrimitiveTableEnum,
    GL: GLEnum
};

const ObjectWrapperDictionary = {};

function readWrapperObject(wrapperName) {
    return function (inputStream, obj) {
        let wrapperObject = ObjectWrapperDictionary[wrapperName];
        if (!wrapperObject) throw ("ObjectWrapperManager.readWrapperObject : " + wrapperName)
    }
}
function getValue(group, str) {
    let map = _globalMap[group] || GLEnum;
    return map[str];
}

function findWrapper(classname) {
    return ObjectWrapperDictionary[classname];
}
function addWrapper(objectWrapper) {
    let classname = objectWrapper.getName();
    ObjectWrapperDictionary[classname] = objectWrapper;
}

let ObjectWrapperManager = {
    getValue,
    findWrapper,
    addWrapper,
    readWrapperObject
}

export {ObjectWrapperManager};