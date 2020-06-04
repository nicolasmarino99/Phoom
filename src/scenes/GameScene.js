import 'phaser';
import logo from '../assets/logo.png'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('tiles', './src/assets/level1/map/tileset.png');
    this.load.tilemapTiledJSON('levela1','./src/assets/level1/map/levela1.json')
  }

  create () {
    
   
    this.map = this.make.tilemap({key: 'levela1'})
    this.tileset = this.map.addTilesetImage('l1', 'tiles')

    this.map.createStaticLayer('map',this.tileset)
    console.log(this.map)

  }
};
