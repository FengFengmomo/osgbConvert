# osg-convert
osg-convert is PureJS module for serializing `.osgt` and `.osgb` files. 

**The tool is modify from [osg-serializer-js](https://github.com/eran-pinhas/osg-serializer-js)**, osg-serializer-js is used in nodejs, and it can use in browser after my translate

UPDATE: Consider using `wasm` using OpenSceneGraph's most updated code ([osg-wasm](https://github.com/cubicool/osg-wasm), [openscenegraph-cross-platform-guide](https://github.com/OGStudio/openscenegraph-cross-platform-guide/tree/master/1.10.SampleWeb)).

##  installation and usage

In terminal: `npm install --save osg-convert`

In code:
```javascript
const osg = require('osg-convert-js');
import {readBuffer}
var filePath = '../Samples/cessna.osgb';

await fetch(filePath).then(res => { return res.arrayBuffer() }).then(abuf => {
        var osgObj = readBuffer(abuf, filePath);
        console.log(osgObj);
});


// start workin with 3d data

```
