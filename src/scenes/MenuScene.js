import 'phaser';
import {AlignGrid} from "../util/alignGrid";
import {Align} from "../util/align";


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
  
    // Load paralax layers
    this.load.image('far', './src/assets/ui/background/far.png');
		this.load.image('sand', './src/assets/ui/background/sand.png');
    this.load.image('foreground-merged', './src/assets/ui/background/foreground-merged.png');
    
    // Load buttons
    this.load.audio('menuMusic', ['./src/assets/music/menuMusic.ogg']);
    this.load.image('blueButton1', './src/assets/ui/buttons/PNG/shiny/7.png');
    this.load.image('blueButton2', './src/assets/ui/buttons/PNG/shiny/7shiny.png');

  }
  
  create () {
    let agrid = new AlignGrid({scene:this, rows: 10, cols: 25})
    
    this.bgMusic = this.sound.add('menuMusic', { volume: 0.2, loop: true });
    window.music = this.bgMusic
    this.bgMusic.play();


    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
    Align.scaleToGameW(this.gameButton ,0.2)
    agrid.placeAtIndex(162,this.gameButton)
    this.gameButton.depth=100
 
    this.gameText = this.add.text(0, 0, 'Play', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: '40px', fill: '#fff' });
    agrid.placeAtIndex(161,this.gameText.setOrigin(-0.3,0.5))
    this.gameText.depth=101
    
    
    this.gameButton.on('pointerdown', pointer =>  {
      this.scene.start('Game');
      this.bgMusic.stop();
    });
    
    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton2');
    });
    
    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('blueButton1');
    });

   this.far = this.add.tileSprite(
     0, 
     0,
     this.game.config.width, 
     this.game.config.height, 
     'far'
   );
   this.far.setOrigin(0,0)
   this.far.setScrollFactor(0)

    this.sand = this.add.tileSprite(
      0, 
      0,
      this.game.config.width, 
      this.game.config.height, 
      'sand'
    );

    this.sand.setOrigin(0,0)
    this.sand.setScrollFactor(0)

    this.foregroundMerged = this.add.tileSprite( 
      0, 
      0,
      this.game.config.width,
      this.game.config.height,
      'foreground-merged'
    );

    this.foregroundMerged.setOrigin(0,0)
    this.foregroundMerged.setScrollFactor(0)




    this.rainFrame = this.add.sprite(0,0,'rain',0)
    let logo = this.add.bitmapText(
      0,
      0,
      'font',
      'PHOOM',
      186
    )
    
    this.frameNames = this.textures.get('rain').getFrameNames()
    

    //Animation to the rain

    this.anims.create({
      key: 'rainy',
      frames: this.anims.generateFrameNames('rain', {start: 1, end: 4, zeroPad: 2, prefix: 'rain_drops-', suffix: '.png'}),
      frameRate: 16,
      repeat: -1
    })
    
    


   

    //agrid.showNumbers()

    agrid.placeAtIndex(57,logo)
  }

  update () {
    let rainAnim = this.rainFrame.anims.play('rainy',true)
    Align.center(rainAnim)
    Align.scaleToGameW(rainAnim,1)

    this.far.tilePositionX += 0.1;
    Align.scaleToGameW(this.far,2)
    this.sand.tilePositionX += 0.3;
    Align.scaleToGameW(this.sand,3.2)
    this.foregroundMerged.tilePositionX += 0.75; 
    Align.scaleToGameW(this.foregroundMerged,3.7) 
  }
};