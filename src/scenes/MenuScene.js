import 'phaser';
import {AlignGrid} from "../util/alignGrid";
import {Align} from "../util/align";
let rainFrame 
let frameNames
export default class MenuScene extends Phaser.Scene {
  constructor () {
    super('Menu');
  }
 
  preload () {
    this.load.atlas('rain','./src/assets/ui/rain/rain.png','./src/assets/ui/rain/rain.json')
    this.load.bitmapFont(
      'font',
      './src/assets/fonts/menu/font.png',
      './src/assets/fonts/menu/font.fnt'
    )
    
    this.load.image('far', './src/assets/ui/background/far.png');
		this.load.image('sand', './src/assets/ui/background/far.png');
		this.load.image('foreground-merged', './src/assets/ui/background/foreground-merged.png');
  }
  
  create () {
    

    this.far = this.add.tileSprite(0, 
      0,
      this.game.config.width, 
      this.game.config.height, 
      'far'
    );
    this.far.setOrigin(0,0)
    this.far.setOrigin(0)

    /*this.sand = this.add.tileSprite(0, 
        200,//this.height - this.cache.getImage('sand').height, 
        this.width, 
        this.cache.getImage('sand').height, 
        'sand'
    );

    this.foregroundMerged = this.add.tileSprite(0, 
        200,//this.height - this.cache.getImage('foreground-merged').height, 
        this.width, 
        this.cache.getImage('foreground-merged').height, 
        'foreground-merged'
    );*/

    this.rainFrame = this.add.sprite(0,0,'rain',0)
    let logo = this.add.bitmapText(
      0,
      0,
      'font',
      'PHOOM',
      166
    )
    
    frameNames = this.textures.get('rain').getFrameNames()
    console.log(frameNames)

    //Animation to the rain

    this.anims.create({
      key: 'rainy',
      frames: this.anims.generateFrameNames('rain', {start: 1, end: 4, zeroPad: 2, prefix: 'rain_drops-', suffix: '.png'}),
      frameRate: 16,
      repeat: -1
    })
    
    


   

    let agrid = new AlignGrid({scene:this, rows: 10, cols: 15})
    agrid.showNumbers()
    agrid.placeAtIndex(34,logo)
  }

  update () {
    let rainAnim = this.rainFrame.anims.play('rainy',true)
    Align.center(rainAnim)
    Align.scaleToGameW(rainAnim,1)

    this.far.tilePositionX -= 0.05;
    //this.sand.tilePosition.x -= 0.3;
    //this.mountainsMid2.tilePosition.x -= 0.75;  
  }
};