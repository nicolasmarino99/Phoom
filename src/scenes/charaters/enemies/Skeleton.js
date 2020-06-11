import "phaser";
import {Align} from "../../../util/align";
import {skeletonAnims} from "../../anims/enemiesAnims/skeletonAnims";

export default class Boss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame)

        skeletonAnims(scene)
        Align.scaleToGameW(this, 0.2)
        this.anims.play('attackske',true)
        this.flipX=true     
    }  
}