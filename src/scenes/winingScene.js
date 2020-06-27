import "phaser";
import { consumeGameData }from "./ApiDataConsumer";
import Button from "./ui/Button";
import {AlignGrid} from "../util/alignGrid";
import {Align} from "../util/align";
import 'babel-polyfill';

export default class Winning extends Phaser.Scene {
    constructor(score = 0) {
        super('winning')
        this.score = score;
    }

    init(data) {
       
        this.score = data.gameState.score
        //this.clock = data.clock
    
        (async () => {
            if (this.score) {
              await consumeGameData.postGameStats('Nico', this.score);
            }
          })()
        
    }
    
    create() {
        

        console.log(this.score)

        this.winningMusic = this.sound.add('winningMusic', { volume: 0.06, loop: false });
        this.winningMusic.play()
        
        var bg = this.add.graphics();
        bg.fillStyle(0x222222, 0.8);
        bg.fillRect(0, 0, 1700, 800);
        
      
        var progressBar = this.add.graphics();

        progressBar.fillStyle(0xFFAA00,0.8);
        progressBar.fillRect(500, 200, 500, 400);
        
          progressBar.depth = 100000



          
          
    }
    update() {
        
        
        
    }
}