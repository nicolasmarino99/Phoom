import "phaser";
import {Align} from "../../../util/align";
import {mushroomAnims} from "../../anims/enemiesAnims/mushroomAnims";
const directions = {
    LEFT: 0,
    RIGHT: 1,
} 


export default class Mushroom extends Phaser.Physics.Arcade.Sprite {
 
    
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame)

        this.direction = directions.RIGHT
        mushroomAnims(scene)
        Align.scaleToGameW(this, 0.2)
        this.anims.play('attack',true)
        this.moveRandom = scene.time.addEvent({
            delay: 5000,
            callback: () => {
                var value = Phaser.Math.Between(0,1);
                this.direction = value
                console.log(value)
            },
            loop: true
        })
        const handleCollision = (go = Phaser.GameObjects.GameObject,tile = Phaser.Tilemaps.Tile) => {
        
            if ( go !== this) {
                return
            } 
            this.direction == 1 ? this.direction = 0 : this.direction = 1
            console.log('hit gonorrea')
        }

        scene.physics.world.on(Phaser.Physics.Arcade.Events.TILE_COLLIDE,handleCollision,Phaser.Tilemaps.Tile,this)
    }
    
    

    preUpdate(t,dt) {
        super.preUpdate(t,dt)

        const speed = 10

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