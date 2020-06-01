import logo from "../assets/logo.png";
import { Align } from "../util/align";
import { AlignGrid } from "../util/alignGrid";

export class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain')
    }
    preload() {
        this.load.image('logo', logo)
    }

    create () {
        let logoScreen = this.add.image(0,0,'logo')
        
        Align.center(logoScreen)
    }

    update () {
    
    }
}