import 'phaser';
import logo from '../assets/logo.png'
import {Align} from "../util/align";

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
   
  }

  preload () {
    // load images
    
  }

  create () {
    const map = this.make.tilemap({ key: 'level1JSON'})
    const tileset = map.addTilesetImage('sea','tiles')
    const layerPlatforms = map.createStaticLayer('level1Map', tileset)
    //Align.center(layerPlatforms)
    Align.scaleToGameW(layerPlatforms,4.9)
    //layerPlatforms.setOrigin(0,1000)
    //this.game.config.scaleMode.zoom = 2
    layerPlatforms.setCollisionByProperty({collides: true})
    //this.map = this.add.tilemap('level1',7,7)
    //this.map.addTilesetImage('tiles')
    const debugGraphics = this.add.graphics().setAlpha(0.7) 
    layerPlatforms.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243,234,48,255),
      faceColor: new Phaser.Display.Color(40,39,37,255)
    })
//
    //this.layer = this.map.createStaticLayer(0)
    ////this.layer.resizeWorld()
    //console.log(this.layer)

  }
};
