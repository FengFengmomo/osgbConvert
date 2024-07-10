import { Node } from "./Node.js";
export class Group extends Node{
    constructor(){
        super();

        /** 
         * @type {Array<Node>}
         */
        this.Children = [];
        
        this.Type = "Osg::Group";
    }
}
