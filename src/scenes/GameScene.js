import 'phaser';
import {Align} from "../util/align";

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
   
  }

  preload () {
    // load images
    
  }

  create () {

    const rescaleY = -180
    this.bg_1 = this.add.tileSprite(0,-500,this.game.config.width,this.game.config.height,'bg_1')
    this.bg_1.setOrigin(0)
    this.bg_1.setScrollFactor(0,2)
    Align.scaleToGameW(this.bg_1,3.5)

    this.bg_2 = this.add.tileSprite(0,50-rescaleY,this.game.config.width,this.game.config.height,'bg_2')
    this.bg_2.setOrigin(0,0)
    this.bg_2.setScrollFactor(0,2)
    Align.scaleToGameW(this.bg_2,2.5)

    this.bg_3 = this.add.tileSprite(0,-180-rescaleY,this.game.config.width,235,'bg_3')
    this.bg_3.setOrigin(0,0)
    this.bg_3.setScrollFactor(0,2)
    

   
    


    const map = this.make.tilemap({ key: 'level1JSON'})
    const tileset = map.addTilesetImage('sea','tiles')
    const layerPlatforms = map.createStaticLayer('level1Map', tileset)
    
    Align.scaleToGameW(layerPlatforms,4.9)
    
    layerPlatforms.setCollisionByProperty({collides: true})
    
    const debugGraphics = this.add.graphics().setAlpha(0.7) 
    layerPlatforms.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243,234,48,255),
      faceColor: new Phaser.Display.Color(40,39,37,255)
    })


    this.hero = this.physics.add.sprite(200,310,'hero').setBounce(0.3)
    //this.hero.setCollideWorldBounds(true)

    this.physics.add.collider(this.hero,layerPlatforms)
    
    Align.scaleToGameW(this.hero, 0.08)

    let frameNames = this.textures.get('hero').getFrameNames()
    console.log(frameNames)

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-idle-2-', suffix: '.png'}),
      frameRate: 8, 
      repeat: -1
    })
    
    this.anims.create({
      key: 'runSlow',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-run-', suffix: '.png'}),
      frameRate: 13, 
      repeat: -1
    })
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-run3-', suffix: '.png'}),
      frameRate: 13, 
      repeat: -1
    })
    this.anims.create({
      key: 'jump1',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-jump-', suffix: '.png'}),
      frameRate: 13, 
      repeat: -1
    })
    this.anims.create({
      key: 'jump2',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 2, zeroPad: 2, prefix: 'adventurer-crnr-jmp-', suffix: '.png'}),
      frameRate: 13, 
      repeat: -1
    })
    this.anims.create({
      key: 'jump3',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 3, zeroPad: 1, prefix: 'adventurer-smrslt-', suffix: '.png'}),
      frameRate: 13, 
      repeat: -1
    })
    this.anims.create({
      key: 'attack1',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 4, zeroPad: 2, prefix: 'adventurer-attack1-', suffix: '.png'}),
      frameRate: 18, 
      repeat: 1
    })
    this.anims.create({
      key: 'attack2',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-attack2-', suffix: '.png'}),
      frameRate: 8, 
    })
    this.anims.create({
      key: 'attack3',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-attack3-', suffix: '.png'}),
      frameRate: 8, 
    })
    
    
    
    this.anims.create({
      key: 'slide',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 1, zeroPad: 2, prefix: 'adventurer-slide-', suffix: '.png'}),
      frameRate: 8, 
    })
    this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 2, zeroPad: 2, prefix: 'adventurer-stand-', suffix: '.png'}),
      frameRate: 8, 
    })
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 3, zeroPad: 2, prefix: 'adventurer-crouch-', suffix: '.png'}),
      frameRate: 8, 
  })

    

    
    this.keys = this.input.keyboard.addKeys('Z,X,A,S')

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)    
    
    
    

    this.cursors = this.input.keyboard.createCursorKeys();

    
    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    
    this.camera.setFollowOffset(-300, 165);
    //this.input.keyboard.on('keydown_W', this.hero.anims.play("attack1", true),this);
    this.keys.A.on('down', () => {
      console.log('asdfasd')
      this.hero.anims.play("attack2", true)
      
    })
    //this.hero.anims.play("idle")
    this.keyCombo = this.input.keyboard.createCombo([this.keys.Z,this.keys.Z,this.keys.Z], {
      resetOnWrongKey: true,
      maxKeyDelay: 0,
      resetOnMatch: false,
      deleteOnMatch: false,


    });

    
  
  }



  update() {
    
    this.bg_1.tilePositionX = this.camera.scrollX * 0.6
    this.bg_2.tilePositionX = this.camera.scrollX * 1
    this.bg_3.tilePositionX = this.camera.scrollX * 2
    this.bg_1.tilePositionX = this.camera.scrollY * 0
    this.bg_2.tilePositionX = this.camera.scrollY * 0
    this.bg_3.tilePositionX = this.camera.scrollY * 0
    
    
    //this.hero.anims.play("idle",true)
    //this.keys.A.on('down', () => {
    //  console.log('asdfasd')
    //  this.hero.anims.play("attack2", true)
    //  
    //})
    
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      const animComplete = (animation, frame) =>
      {this.hero.play('attack1',true);
      //  Animation is over, let's fade the sprite out
      this.tweens.add({
          targets: this.hero,
          duration: 3000,
          alpha: 0
      });
  }

    //  Animation will repeat twice and then emit the event
    this.hero.on('animationcomplete', animComplete, this);

    
      
    
    }  else if (this.cursors.right.isDown ) {
        this.hero.setVelocityX(100)
        this.hero.flipX=false
        if (this.cursors.shift.isDown) {
            this.hero.setVelocityX(170)
            
            this.hero.anims.play("runSlow",true) 
            
        } else if(this.cursors.down.isDown) {
            this.hero.anims.play("slide",true) 

        } else {
            this.hero.anims.play("run",true)
        }
        
    
        
          
    } else if (this.cursors.left.isDown) { 
        
        this.hero.setVelocityX(-120)
        
        this.hero.flipX=true
        if (this.cursors.shift.isDown) {
          this.hero.setVelocityX(-170)
          
          this.hero.anims.play("runSlow",true) 
          
      } else if(this.cursors.down.isDown) {
          this.hero.anims.play("slide",true) 

      } else {
          this.hero.anims.play("run",true)
      }
      
    }
    else {
        
        this.hero.setVelocityX(0);
        this.hero.anims.play("idle",true)
        
        
    }
    if (this.cursors.up.isDown ) {
        this.hero.setVelocityY(-400)
        this.hero.anims.play("jump1",true)
        
    }

  }
};
