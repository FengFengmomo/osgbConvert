
import { readFile} from "./index.js";

var filePath = '../Samples/cessna.osgb'
fetch(filePath).then(res => { return res.arrayBuffer() }).then(abuf => {
    var osgObj = osg.readBuffer(abuf, filePath)
    console.log(`PagedLOD`,osgObj);
})

