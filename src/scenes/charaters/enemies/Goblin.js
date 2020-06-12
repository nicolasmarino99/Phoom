import "phaser";
import {Align} from "../../../util/align";
import {goblinAnims} from "../../anims/enemiesAnims/goblinAnims";
const directions = {
    LEFT: 0,
    RIGHT: 1,
} 

export default class Goblin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame)
        
        this.direction = directions.RIGHT
        goblinAnims(scene)
        Align.scaleToGameW(this, 0.2)
        this.anims.play('attackgoblin',true)
        this.flipX=true    
    }

    preUpdate(t,dt) {
    super.preUpdate(t,dt)

    const speed = 50

    switch (this.direction) {
        
        case directions.RIGHT:
            this.setVelocityX(speed)
            this.flipX=false
            break
        case directions.LEFT:
            this.setVelocityX(-speed)
            this.flipX=true
            break  
    }
            
    }
    

    
}