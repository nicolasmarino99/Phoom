import 'phaser';
import {Align} from "../util/align";
import {blueCoinAnims } from "../scenes/anims/coinsAnims/blueCoinAnims";
import {greenCoinAnims} from "../scenes/anims/coinsAnims/greenCoinAnims";
import {orangeCoinAnims} from "../scenes/anims/coinsAnims/orangeCoinAnims";
import {bossAnims} from "../scenes/anims/enemiesAnims/bossAnims";
import {goblinAnims} from "../scenes/anims/enemiesAnims/goblinAnims";
import {mushroomAnims} from "../scenes/anims/enemiesAnims/mushroomAnims";
import {skeletonAnims} from "../scenes/anims/enemiesAnims/skeletonAnims";
import {heroAnims} from "../scenes/anims/herosAnims/heroAnims";

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
   
  }

  preload () {
    
  }

  create () {

    this.gameMusic = this.sound.add('gameMusic', { volume: 0.2, loop: true });
    this.gameMusic.play();

    /* Add Paralax background */

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
    this.boss = this.physics.add.sprite(6700,210,'boss')
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
    this.skeleton1 = this.physics.add.group({
      key: 'skeleton',
      repeat: 2,
      setXY: { x: 5000, y: 230, stepX: 180 }
    })
    this.skeleton2 = this.physics.add.group({
      key: 'skeleton',
      repeat: 1,
      setXY: { x: 6000, y: 230, stepX: 160 }
    })
    this.coinsb = this.physics.add.group({
      key: 'cb',
      repeat: 11*5,
      setXY: { x: 19, y: 0, stepX: 70 }
    })
    this.coinsg = this.physics.add.group({
      key: 'cg',
      repeat: 11*3,
      setXY: { x: 4100, y: 0, stepX: 70 }
    })
    this.coinso = this.physics.add.group({
      key: 'co',
      repeat: 11,
      setXY: { x: 5500, y: 0, stepX: 70 }
    })

    Align.scaleToGameW(this.hero, 0.08)
    Align.scaleToGameW(this.boss, 0.18)
    Align.scaleToGameW(this.coinsb, 2)
    
    //Colliders

    this.physics.add.collider(this.coinsb, layerPlatforms);
    this.physics.add.collider(this.coinsg, layerPlatforms);
    this.physics.add.collider(this.coinso, layerPlatforms);
    this.physics.add.collider(this.hero,layerPlatforms)
    this.physics.add.collider(this.boss,layerPlatforms)
    this.physics.add.collider(this.boss,this.hero)
    this.physics.add.collider(this.mushrooms1,layerPlatforms)
    this.physics.add.collider(this.mushrooms2,layerPlatforms)
    this.physics.add.collider(this.mushrooms1,this.hero)
    this.physics.add.collider(this.mushrooms2,this.hero)
    this.physics.add.collider(this.goblin1,layerPlatforms)
    this.physics.add.collider(this.goblin2,layerPlatforms)
    this.physics.add.collider(this.goblin1,this.hero)
    this.physics.add.collider(this.goblin2,this.hero)
    this.physics.add.collider(this.skeleton1,layerPlatforms)
    this.physics.add.collider(this.skeleton2,layerPlatforms)
    this.physics.add.collider(this.skeleton1,this.hero)
    this.physics.add.collider(this.skeleton2,this.hero)
    
    
    //Adjust camara settings and collider hero size

    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    this.hero.body.setSize(this.hero.width*0.5,this.hero.height*0.8)
    this.hero.body.offset.x = 10
    this.hero.body.offset.y = 6
    this.camera.setFollowOffset(-300, 165);

  
    this.coinMusic = this.sound.add('coinMusic', { volume: 0.6, loop: false });

    function collectCoin(player, coin) {
      this.coinMusic.play();
      coin.disableBody(true, true);
    }
    this.physics.add.overlap(this.hero, this.coinsb, collectCoin, null, this);
    this.physics.add.overlap(this.hero, this.coinsg, collectCoin, null, this);
    this.physics.add.overlap(this.hero, this.coinso, collectCoin, null, this);
    
    
    blueCoinAnims(this)
    greenCoinAnims(this)
    orangeCoinAnims(this)
    skeletonAnims(this)
    goblinAnims(this)
    mushroomAnims(this)
    bossAnims(this)
    heroAnims(this)
    

    this.keys = this.input.keyboard.addKeys('Z,X,A,S')
    this.cursors = this.input.keyboard.createCursorKeys();

    

    
  
  }



  update() {

    this.boss.anims.play('idleboss',true)

    this.coinsb.children.iterate( child => {

     
      Align.scaleToGameW(child, 0.02)
      
      child.body.offset.y = 10
      child.anims.play('shine1',true)
  
  });

  this.coinsg.children.iterate( child => {

     
    Align.scaleToGameW(child, 0.02)
    
    child.body.offset.y = 10
    child.anims.play('shine2',true)

});
this.coinso.children.iterate( child => {

     
  Align.scaleToGameW(child, 0.02)
  
  child.body.offset.y = 10
  child.anims.play('shine3',true)

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
    this.skeleton1.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attackske',true)
      child.flipX=true
    })

    this.skeleton2.children.iterate( child => {
      Align.scaleToGameW(child, 0.2)
      child.body.setSize(25,40)
      child.body.offset.x = 60
      child.body.offset.y = 60
      child.anims.play('attackske',true)
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
