import "phaser";
import {Align} from "../../../util/align";
import {goblinAnims} from "../../anims/enemiesAnims/goblinAnims";

export default class Goblin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame)
        
            goblinAnims(scene)
            Align.scaleToGameW(this, 0.2)
            this.anims.play('attackgoblin',true)
            this.flipX=true
           
            
            
            
            
      
            
        
     
        
    }
    

    
}