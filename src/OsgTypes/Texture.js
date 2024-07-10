
import { StateAttribute } from './StateAttribute.js';
import { GLEnum } from '../Enum/GLEnum.js';
import { InternalFormatMode } from '../Enum/Texture_InternalFormatMode.js';
import { ShadowCompareFunc } from '../Enum/Texture_ShadowCompareFunc.js';
import { ShadowTextureMode } from '../Enum/Texture_ShadowTextureMode.js';
class Texture extends StateAttribute {
    constructor() {
        super();

        this.InternalFormatMode = 0;
        this.InternalFormat = 0;
        this.WrapS = GLEnum.CLAMP_TO_EDGE;
        this.WrapT = GLEnum.CLAMP_TO_EDGE;
        this.WrapR = GLEnum.CLAMP_TO_EDGE;
        this.MinFilter = GLEnum.LINEAR_MIPMAP_LINEAR;
        this.MagFilter = GLEnum.LINEAR;
        this.MaxAnisotropy = 1;
        this.UseHardwareMipMapGeneration = true;
        this.UnRefImageDataAfterApply = false;
        this.ClientStorageHint = false;
        this.ResizeNonPowerOfTwoHint = true;
        this.BorderColor = [0, 0, 0, 0];
        this.BorderWidth = 1;
        this.ShadowComparison = false;
        this.ShadowCompareFunc = ShadowCompareFunc.LEQUAL;
        this.ShadowTextureMode = ShadowTextureMode.LUMINANCE;
        this.ShadowAmbient = 0;


        this.Type = "Osg::Texture";
    }

    computeInternalFormatType() {
        // TODO
    }

    setInternalFormat(internalFormat) {
        this.InternalFormatMode = InternalFormatMode.USE_USER_DEFINED_FORMAT;
        this.InternalFormat = internalFormat;
        computeInternalFormatType();
    }

}
export { Texture };