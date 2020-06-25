import "phaser";
import Button from "./ui/Button";
import {AlignGrid} from "../util/alignGrid";
import {Align} from "../util/align";

export default class Winning extends Phaser.Scene {
    constructor() {
        super('winning')
    }
    
    create() {
        



        this.winningMusic = this.sound.add('winningMusic', { volume: 0.6, loop: false });
        this.winningMusic.play()
        
        var bg = this.add.graphics();
        bg.fillStyle(0x222222, 0.8);
        bg.fillRect(0, 0, 1700, 800);
        
      
        var progressBar = this.add.graphics();

        progressBar.fillStyle(0xFFAA00,1);
        progressBar.fillRect(500, 200, 500, 400);
        
          progressBar.depth = 100000
          
    }
    update() {
        
        
        
    }
}