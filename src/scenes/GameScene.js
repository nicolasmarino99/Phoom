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

    this.gameMusic = this.sound.add('gameMusic', { volume: 0.2, loop: true });
    this.gameMusic.play();

    const rescaleY = -410
    this.bg_1 = this.add.tileSprite(0,-100,this.game.config.width,this.game.config.height,'bg_1')
    this.bg_1.setOrigin(0)
    this.bg_1.setScrollFactor(0)
    Align.scaleToGameW(this.bg_1,1.5)

    this.bg_2 = this.add.tileSprite(0,50-rescaleY,this.game.config.width,this.game.config.height,'bg_2')
    this.bg_2.setOrigin(0,0)
    this.bg_2.setScrollFactor(0)
    Align.scaleToGameW(this.bg_2,2.5)

    this.bg_3 = this.add.tileSprite(0,-180-rescaleY,this.game.config.width,235,'bg_3')
    this.bg_3.setOrigin(0,0)
    this.bg_3.setScrollFactor(0)
    

   
    


    const map = this.make.tilemap({ key: 'level1JSON'})
    const tileset = map.addTilesetImage('sea','tiles')
    const layerPlatforms = map.createStaticLayer('level1Map', tileset)
    
    Align.scaleToGameW(layerPlatforms,4.9)
    
    layerPlatforms.setCollisionByProperty({collides: true})
    
    //const debugGraphics = this.add.graphics().setAlpha(0.7) 
    //layerPlatforms.renderDebug(debugGraphics, {
    //  tileColor: null,
    //  collidingTileColor: new Phaser.Display.Color(243,234,48,255),
    //  faceColor: new Phaser.Display.Color(40,39,37,255)
    //})


    this.hero = this.physics.add.sprite(200,310,'hero').setBounce(0.3)
    
    this.mushrooms1 = this.physics.add.group({
      key: 'mushroom',
      repeat: 2,
      setXY: { x: 400, y: 230, stepX: 160 }
    })
    this.mushrooms2 = this.physics.add.group({
      key: 'mushroom',
      repeat: 2,
      setXY: { x: 1900, y: 230, stepX: 160 }
    })
    this.goblin1 = this.physics.add.group({
      key: 'goblin',
      repeat: 2,
      setXY: { x: 3400, y: 0, stepX: 160 }
    })
    this.goblin2 = this.physics.add.group({
      key: 'goblin',
      repeat: 4,
      setXY: { x: 4000, y: 230, stepX: 160 }
    })
    this.coinsb = this.physics.add.group({
      key: 'cb',
      repeat: 11*5,
      setXY: { x: 19, y: 0, stepX: 70 }
    })
    

    
    //Colliders
    this.physics.add.collider(this.coinsb, layerPlatforms);
    this.physics.add.collider(this.hero,layerPlatforms)
    this.physics.add.collider(this.mushrooms1,layerPlatforms)
    this.physics.add.collider(this.mushrooms2,layerPlatforms)
    this.physics.add.collider(this.mushrooms1,this.hero)
    this.physics.add.collider(this.mushrooms2,this.hero)
    this.physics.add.collider(this.goblin1,layerPlatforms)
    this.physics.add.collider(this.goblin2,layerPlatforms)
    this.physics.add.collider(this.goblin1,this.hero)
    this.physics.add.collider(this.goblin2,this.hero)
    
    Align.scaleToGameW(this.hero, 0.08)
    Align.scaleToGameW(this.coinsb, 2)

    //Adjust camara settings and collider hero size
    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    this.hero.body.setSize(this.hero.width*0.5,this.hero.height*0.8)
    this.hero.body.offset.x = 10
    this.hero.body.offset.y = 6
   
    this.camera.setFollowOffset(-300, 165);

    //let frameNames = this.textures.get('mushroom').getFrameNames()
    //console.log(frameNames)

    this.physics.add.overlap(this.hero, this.coinsb, collectCoin, null, this);
    
    


    this.coinMusic = this.sound.add('coinMusic', { volume: 0.6, loop: false });

    const collectCoin = (coin) => {
      this.coinMusic.play();
      coin.disableBody(true, true);
    }


    /* Coin Animation */
    this.anims.create({
      key: 'shine',
      frames: this.anims.generateFrameNames('cb', {start: 0, end: 7, zeroPad: 1, prefix: 'cb-', suffix: '.png'}),
      frameRate: 9, 
      repeat: -1
    })
    this.anims.create({
      key: 'shine',
      frames: this.anims.generateFrameNames('cg', {start: 0, end: 7, zeroPad: 1, prefix: 'cg-', suffix: '.png'}),
      frameRate: 9, 
      repeat: -1
    })
    this.anims.create({
      key: 'shine',
      frames: this.anims.generateFrameNames('co', {start: 0, end: 7, zeroPad: 1, prefix: 'co-', suffix: '.png'}),
      frameRate: 9, 
      repeat: -1
    })
    /* goblin Animation */
    this.anims.create({
      key: 'attackgoblin',
      frames: this.anims.generateFrameNames('goblin', {start: 0, end: 7, zeroPad: 1, prefix: 'Attack2-', suffix: '.png'}),
      frameRate: 9, 
      repeat: -1
    })
    /* Mushroom animations */
    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNames('mushroom', {start: 0, end: 3, zeroPad: 1, prefix: 'Attack2-', suffix: '.png'}),
      frameRate: 7, 
      repeat: -1
    })


    /* Hero animations */
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
      frameRate: 18, 
    })
    this.anims.create({
      key: 'attack3',
      frames: this.anims.generateFrameNames('hero', {start: 0, end: 5, zeroPad: 2, prefix: 'adventurer-attack3-', suffix: '.png'}),
      frameRate: 18, 
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
    this.cursors = this.input.keyboard.createCursorKeys();

    
    
    
    
    
    this.keyCombo = this.input.keyboard.createCombo([this.keys.Z,this.keys.Z,this.keys.Z], {
      resetOnWrongKey: true,
      maxKeyDelay: 0,
      resetOnMatch: false,
      deleteOnMatch: false,


    });

    
  
  }



  update() {

    this.coinsb.children.iterate( child => {

     
      Align.scaleToGameW(child, 0.02)
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      child.body.offset.y = 10
      child.anims.play('shine',true)
  
  });
    
    this.mushrooms1.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attack',true)
      child.flipX=true
      
    })
    this.mushrooms2.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attack',true)
      child.flipX=true
    })

    this.goblin1.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attackgoblin',true)
      child.flipX=true
    })

    this.goblin2.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attackgoblin',true)
      child.flipX=true
    })
    


    this.bg_1.tilePositionX +=  0.6
    this.bg_2.tilePositionX +=  2
    this.bg_3.tilePositionX +=  0.5
    
    this.cursors.up.on('down',()=>{
      this.hero.setVelocityY(-200)
      this.hero.anims.play("jump1",true)
    },this)
  
    if (this.keys.Z.isDown) {
      
      this.hero.play('attack1',true);
      
    }else if (this.keys.X.isDown ) {
    //  Animation will repeat twice and then emit the event
    this.hero.play('attack2',true);
  }else if (this.keys.A.isDown  ) {
    this.hero.play('attack3',true);
    
      
    
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
          this.hero.body.setSize(this.hero.width*0.5,this.hero.height*0.5)
          this.hero.body.offset.y = 16
          this.hero.body.offset.x = 10

      } else {
          this.hero.anims.play("run",true)
          this.hero.body.setSize(this.hero.width*0.5,this.hero.height*0.8)
          this.hero.body.offset.x = 10
          this.hero.body.offset.y = 6
      }
      
    }
    else {
        
        this.hero.setVelocityX(0);
        this.hero.anims.play("idle",true)
        
        
    }
    if (this.cursors.up.isDown ) {
        
        this.hero.anims.play("jump1",true)
        
    }

    if (this.cursors.down.isDown ) {
        
      this.hero.anims.play("down",true)
      
  }
  }
};
