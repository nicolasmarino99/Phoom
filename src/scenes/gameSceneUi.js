import "phaser";
import Button from "./ui/Button";
import {AlignGrid} from "../util/alignGrid";
import {Align} from "../util/align";
import { gameState } from "./GameScene";
 
export default class gameUi extends Phaser.Scene {
    constructor() {
        super('game-ui')
    }
    create() {
        
        let agrid = new AlignGrid({scene:this, rows: 10, cols: 25})
        //agrid.showNumbers()
        this.gameMusic = this.sound.add('gameMusic', { volume: 0.2, loop: true });
        this.gameMusic.play();

        this.soundOn = new Button(this, 50,50, 'soundOn', 'soundOff', () => {
            this.gameMusic.stop() ? this.gameMusic.stop() : this.gameMusic.play()
        });
        

        this.menu = new Button(this, 130,50, 'pause1', 'pause2', () => {
            this.scene.start('Menu');
            this.scene.stop('Game');
            this.gameMusic.stop();
        }).setScale(.5);
        

        

        this.health = this.add.sprite(0, 0, 'ManaPanel')
        this.health.flipY = true

        this.orb = this.add.sprite(0, 0, 'orb')
        
        agrid.placeAtIndex(16,this.health)
        agrid.placeAtIndex(48,this.orb)
        this.orb.setOrigin(0.619,0.45)
        this.health.setOrigin(0.04,0.27)

        
          //console.log(gameState.score)
          
    }
    }

    