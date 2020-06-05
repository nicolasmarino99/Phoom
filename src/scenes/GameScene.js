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
    
    Align.scaleToGameW(layerPlatforms,4.9)
    
    layerPlatforms.setCollisionByProperty({collides: true})
    
    const debugGraphics = this.add.graphics().setAlpha(0.7) 
    layerPlatforms.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243,234,48,255),
      faceColor: new Phaser.Display.Color(40,39,37,255)
    })


    this.hero = this.physics.add.sprite(200,200,'hero').setBounce(0.3)
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
      frameRate: 8, 
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

    

    

    this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.cursors = this.input.keyboard.createCursorKeys();

    
    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    this.camera.setFollowOffset(-300, 165);
    this.hero.anims.play("idle")
  }

  update() {
    
    if (this.keyZ.isDown) {
      this.hero.anims.play("attack1", true)
    
    }  else if (this.cursors.right.isDown ) {
        this.hero.setVelocityX(100)
        if (this.cursors.shift.isDown) {
            this.hero.setVelocityX(170)
            
            this.hero.anims.play("runSlow",true) 
            //this.hero.anims.play("walk",false)
        } else if(this.cursors.down.isDown) {
            this.hero.anims.play("slide",true) 

        } else {
            this.hero.anims.play("run",true)
        }
        
    
        
          
    } else if (this.cursors.left.isDown) { 
        
        this.hero.setVelocityX(-120)
        this.hero.anims.play("runSlow",true)
      
    }
    else {
        
        this.hero.setVelocityX(0);
        this.hero.anims.play("idle")
        
        
    }
    if (this.cursors.up.isDown && this.hero.body.touching.down) {
        this.hero.setVelocityY(-400)
        this.hero.anims.play("jump1",true)
        
    }
    
  }
};
