let GLEnum = {
    // Modes
    GL_ALPHA_TEST: 0x0BC0,
    GL_BLEND: 0x0BE2,
    GL_COLOR_LOGIC_OP: 0x0BF2,
    GL_COLOR_MATERIAL: 0x0B57,
    GL_CULL_FACE: 0x0B44,
    GL_DEPTH_TEST: 0x0B71,
    GL_FOG: 0x0B60,
    GL_FRAGMENT_PROGRAM_ARB: 0x8804,
    GL_LINE_STIPPLE: 0x0B24,
    GL_POINT_SMOOTH: 0x0B10,
    GL_POINT_SPRITE_ARB: 0x8861,
    GL_POLYGON_OFFSET_FILL: 0x8037,
    GL_POLYGON_OFFSET_LINE: 0x2A02,
    GL_POLYGON_OFFSET_POINT: 0x2A01,
    GL_POLYGON_STIPPLE: 0x0B42,
    GL_SCISSOR_TEST: 0x0C11,
    GL_STENCIL_TEST: 0x0B90,
    GL_STENCIL_TEST_TWO_SIDE: 0x8910,
    GL_VERTEX_PROGRAM_ARB: 0x8620,

    GL_COLOR_SUM: 0x8458,
    GL_LIGHTING: 0x0B50,
    GL_NORMALIZE: 0x0BA1,
    GL_RESCALE_NORMAL: 0x803A,

    GL_TEXTURE_1D: 0x0DE0,
    GL_TEXTURE_2D: 0x0DE1,
    GL_TEXTURE_3D: 0x806F,
    GL_TEXTURE_CUBE_MAP: 0x8513,
    GL_TEXTURE_RECTANGLE: 0x84F5,
    GL_TEXTURE_GEN_Q: 0x0C63,
    GL_TEXTURE_GEN_R: 0x0C62,
    GL_TEXTURE_GEN_S: 0x0C60,
    GL_TEXTURE_GEN_T: 0x0C61,

    GL_CLIP_PLANE0: 0x3000,
    GL_CLIP_PLANE1: 0x3001,
    GL_CLIP_PLANE2: 0x3002,
    GL_CLIP_PLANE3: 0x3003,
    GL_CLIP_PLANE4: 0x3004,
    GL_CLIP_PLANE5: 0x3005,

    GL_LIGHT0: 0x4000,
    GL_LIGHT1: 0x4001,
    GL_LIGHT2: 0x4002,
    GL_LIGHT3: 0x4003,
    GL_LIGHT4: 0x4004,
    GL_LIGHT5: 0x4005,
    GL_LIGHT6: 0x4006,
    GL_LIGHT7: 0x4007,

    GL_VERTEX_PROGRAM_POINT_SIZE: 0x8642,
    GL_VERTEX_PROGRAM_TWO_SIDE: 0x8643,

    // Functions
    NEVER: 0x0200,
    LESS: 0x0201,
    EQUAL: 0x0202,
    LEQUAL: 0x0203,
    GREATER: 0x0204,
    NOTEQUAL: 0x0205,
    GEQUAL: 0x0206,
    ALWAYS: 0x0207,

    // Texture environment states
    REPLACE: 0x1E01,
    MODULATE: 0x2100,
    ADD: 0x0104,
    ADD_SIGNED: 0x8574,
    INTERPOLATE: 0x8575,
    SUBTRACT: 0x84E7,
    DOT3_RGB: 0x86AE,
    DOT3_RGBA: 0x86AF,

    CONSTANT: 0x8576,
    PRIMARY_COLOR: 0x8577,
    PREVIOUS: 0x8578,
    TEXTURE: 0x1702,
    TEXTURE0: 0x84C0,
    TEXTURE1: 0x84C1,
    TEXTURE2: 0x84C2,
    TEXTURE3: 0x84C3,
    TEXTURE4: 0x84C4,
    TEXTURE5: 0x84C5,
    TEXTURE6: 0x84C6,
    TEXTURE7: 0x84C7,

    // Texture clamp modes
    CLAMP: 0x2900,
    CLAMP_TO_EDGE: 0x812F,
    CLAMP_TO_BORDER: 0x812D,
    REPEAT: 0x2901,
    MIRROR: 0x8370,

    // Texture filter modes
    LINEAR: 0x2601,
    LINEAR_MIPMAP_LINEAR: 0x2703,
    LINEAR_MIPMAP_NEAREST: 0x2701,
    NEAREST: 0x2600,
    NEAREST_MIPMAP_LINEAR: 0x2702,
    NEAREST_MIPMAP_NEAREST: 0x2700,

    // Texture formats
    GL_INTENSITY: 0x8049,
    GL_LUMINANCE: 0x1909,
    GL_ALPHA: 0x1906,
    GL_LUMINANCE_ALPHA: 0x190A,
    GL_RGB: 0x1907,
    GL_RGBA: 0x1908,
    GL_COMPRESSED_ALPHA_ARB: 0x84E9,
    GL_COMPRESSED_LUMINANCE_ARB: 0x84EA,
    GL_COMPRESSED_INTENSITY_ARB: 0x84EC,
    GL_COMPRESSED_LUMINANCE_ALPHA_ARB: 0x84EB,
    GL_COMPRESSED_RGB_ARB: 0x84ED,
    GL_COMPRESSED_RGBA_ARB: 0x84EE,
    GL_COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0,
    GL_COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1,
    GL_COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2,
    GL_COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3,
    GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00,
    GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01,
    GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02,
    GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03,
    GL_ETC1_RGB8_OES: 0x8D64,
    GL_COMPRESSED_RGB8_ETC2: 0x9274,
    GL_COMPRESSED_SRGB8_ETC2: 0x9275,
    GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276,
    GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277,
    GL_COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
    GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279,
    GL_COMPRESSED_R11_EAC: 0x9270,
    GL_COMPRESSED_SIGNED_R11_EAC: 0x9271,
    GL_COMPRESSED_RG11_EAC: 0x9272,
    GL_COMPRESSED_SIGNED_RG11_EAC: 0x9273,

    // Texture source types
    GL_BYTE: 0x1400,
    GL_SHORT: 0x1402,
    GL_INT: 0x1404,
    GL_FLOAT: 0x1406,
    GL_DOUBLE: 0x140A,
    GL_UNSIGNED_BYTE: 0x1401,
    GL_UNSIGNED_SHORT: 0x1403,
    GL_UNSIGNED_INT: 0x1405,

    // Blend values
    DST_ALPHA: 0x0304,
    DST_COLOR: 0x0306,
    ONE: 1,
    ONE_MINUS_DST_ALPHA: 0x0305,
    ONE_MINUS_DST_COLOR: 0x0307,
    ONE_MINUS_SRC_ALPHA: 0x0303,
    ONE_MINUS_SRC_COLOR: 0x0301,
    SRC_ALPHA: 0x0302,
    SRC_ALPHA_SATURATE: 0x0308,
    SRC_COLOR: 0x0300,
    CONSTANT_COLOR: 0x8001,
    ONE_MINUS_CONSTANT_COLOR: 0x8002,
    CONSTANT_ALPHA: 0x8003,
    ONE_MINUS_CONSTANT_ALPHA: 0x8004,
    ZERO: 0,

    // Fog coordinate sources
    COORDINATE: 0x8451,
    DEPTH: 0x8452,

    // Hint targets
    FOG_HINT: 0x0C54,
    GENERATE_MIPMAP_HINT: 0x8192,
    LINE_SMOOTH_HINT: 0x0C52,
    PERSPECTIVE_CORRECTION_HINT: 0x0C50,
    POINT_SMOOTH_HINT: 0x0C51,
    POLYGON_SMOOTH_HINT: 0x0C53,
    TEXTURE_COMPRESSION_HINT: 0x84EF,
    FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B,

    // Polygon modes
    POINT: 0x1B00,
    LINE: 0x1B01,
    FILL: 0x1B00,

    // Misc
    BACK: 0x0405,
    FRONT: 0x0404,
    FRONT_AND_BACK: 0x0408,
    FIXED_ONLY: 0x891D,
    FASTEST: 0x1101,
    NICEST: 0x1101,
    DONT_CARE: 0x1100
};

export {GLEnum};