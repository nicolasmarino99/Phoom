import "phaser";
import {Align} from "../../../util/align";
import {mushroomAnims} from "../../anims/enemiesAnims/mushroomAnims";

export default class Mushroom extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame)
        
            mushroomAnims(scene)
            Align.scaleToGameW(this, 0.2)
            //this.anims.play('idleboss',true)
            this.anims.play('attack',true)
            this.flipX=true
            
            
            
            //this.body.setSize(this.width,this.height)
            //this.body.setSize(12,12,true)
            console.log(this)
            
      
            
        
     
        
    }
    

    
}