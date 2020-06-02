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
    window.scene = this

    this.far = this.add.tileSprite(0, 
      200,//this.height - this.cache.getImage('far').height, 
      this.width, 
      this.cache.getImage('far').height, 
      'far'
    );

    this.sand = this.add.tileSprite(0, 
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
    );

    rainFrame = this.add.sprite(0,0,'rain',0)
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
      frames: 'far',
      frameRate: 16,
      repeat: -1
    })
    
    


   

    let agrid = new AlignGrid({scene:this, rows: 10, cols: 15})
    agrid.showNumbers()
    agrid.placeAtIndex(35,logo)
  }

  update () {
    let rainAnim = rainFrame.anims.play('rainy',true)
    Align.center(rainAnim)
    Align.scaleToGameW(rainAnim,1)

    this.far.tilePosition.x -= 0.05;
    this.sand.tilePosition.x -= 0.3;
    this.mountainsMid2.tilePosition.x -= 0.75;  
  }
};