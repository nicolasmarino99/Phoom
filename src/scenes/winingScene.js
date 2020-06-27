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
        this.name = this.registry.list.name
        //this.clock = data.clock
    
        
        
    }
    
    create() {

        const compare = () => {
            const bandA = a.band.toUpperCase();
            const bandB = b.band.toUpperCase();

            let comparison = 0;
            if (bandA > bandB) {
            comparison = 1;
            } else if (bandA < bandB) {
            comparison = -1;
            }
            return comparison;
            }
        (async () => {
        if (this.name !== '') {
            await consumeGameData.postGameStats(this.name, this.score);
            }
        let leaderBoard = await consumeGameData.getGamersStats()
        leaderBoard = JSON.parse(JSON.stringify(leaderBoard))
        leaderBoard.forEach( (obj,i) => {
            i+1
            this.add.text(550, 30*(i), obj.user, { font: '22px Arial', fill: '#ffffff' });
            this.add.text(800, 30*(i), `Score: ${obj.score} `, { font: '22px Arial', fill: '#ffffff' });
        });
        })();
          
         
        

        this.winningMusic = this.sound.add('winningMusic', { volume: 0.04, loop: false });
        this.winningMusic.play()
        
        var bg = this.add.graphics();
        bg.fillStyle(0x222222, 0.8);
        bg.fillRect(0, 0, 1700, 800);
        
      
        var progressBar = this.add.graphics();

        progressBar.fillStyle(0xFFAA00,0.8);
        progressBar.fillRect(500, 200, 500, 400);
        
          progressBar.depth = 0

          console.log()
       
        //this.registry.events.on('changedata', this.updateData, this);
          
    }
    
    update() {
        
        
        
    }
}