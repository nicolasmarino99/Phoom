import "phaser";
import Button from "./ui/Button";
 
export default class gameUi extends Phaser.Scene {
    constructor() {
        super('game-ui')
    }
    create() {
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
        
    }
    }

    