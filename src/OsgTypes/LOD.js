
import { Group } from "./Group.js";
import { CenterMode } from "../Enum/LOD_CenterMode.js";
import { RangeMode } from "../Enum/LOD_RangeMode.js";

class LOD extends Group {
    constructor() {
        super();

        this.CenterMode = CenterMode.USE_BOUNDING_SPHERE_CENTER;
        this.Center = null;
        this.Radius = null;
        this.RangeMode = RangeMode.DISTANCE_FROM_EYE_POINT;
        this.RangeList = null;

        this.Type = "Osg::Group";
    }
}
export { LOD };