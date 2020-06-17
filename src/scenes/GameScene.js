import 'phaser';
import {Align} from "../util/align";
import {blueCoinAnims } from "../scenes/anims/coinsAnims/blueCoinAnims";
import {greenCoinAnims} from "../scenes/anims/coinsAnims/greenCoinAnims";
import {orangeCoinAnims} from "../scenes/anims/coinsAnims/orangeCoinAnims";


import {heroAnims} from "../scenes/anims/herosAnims/heroAnims";
import Boss from './charaters/enemies/Boss' 
import Mushroom from './charaters/enemies/Mushroom'
import Goblin from './charaters/enemies/Goblin'
import Skeleton from './charaters/enemies/Skeleton'
import { adjustBodies } from "./charaters/settingsCharBodies"; 
import { addCoinsToScenario } from "./items/coins/coinsIter"; 

export let gameState = {
  score: 0
} 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
   
  }

  preload () {
    
  }

  create () {

    this.scene.run('game-ui')
    

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
    

    this.boss = this.physics.add.group({
      classType: Boss,
    })
    this.boss.get(7000,100,'boss')
    

    this.mushroom = this.physics.add.group({
      classType: Mushroom,

    })
    this.mushroom.get(500,100,'mushroom')
    
    this.goblin = this.physics.add.group({
      classType: Goblin,
    })
    this.goblin.get(600,100,'goblin')

    this.skeleton = this.physics.add.group({
      classType: Skeleton,
    })
    this.skeleton.get(600,100,'skeleton')
   
    
    
    
    addCoinsToScenario(this)

    Align.scaleToGameW(this.hero, 0.08)
    Align.scaleToGameW(this.boss, 0.18)
    
    
    //Colliders

    this.physics.add.collider(this.coinsb, layerPlatforms);
    this.physics.add.collider(this.coinsg, layerPlatforms);
    this.physics.add.collider(this.coinso, layerPlatforms);

    this.physics.add.collider(this.hero,layerPlatforms)

    this.physics.add.collider(this.boss,layerPlatforms)
    this.physics.add.collider(this.boss,this.hero)
  
    this.physics.add.collider(this.mushroom,layerPlatforms)
    this.physics.add.collider(this.mushroom,this.hero)
    
    this.physics.add.collider(this.goblin,layerPlatforms)
    this.physics.add.collider(this.goblin,this.hero)
    
    this.physics.add.collider(this.skeleton,layerPlatforms)
    this.physics.add.collider(this.skeleton,this.hero)
    
    
    
    //Adjust camara settings and collider hero size

    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    
    this.camera.setFollowOffset(-300, 165);

  
    this.coinMusic = this.sound.add('coinMusic', { volume: 0.6, loop: false });
    
    this.scoreText  = this.add.bitmapText(
      0,
      0,
      'font',
      'Points:' + gameState.score,
      46
    )
    function collectCoin(player, coin) {
      this.coinMusic.play();
      coin.disableBody(true, true);
      gameState.name = 'Nicolas' 
      gameState.score += 1000 
      //this.scoreText.setText('Score: ' + gameState.score);
    }
    this.physics.add.overlap(this.hero, this.coinsb, collectCoin, null, this);
    this.physics.add.overlap(this.hero, this.coinsg, collectCoin, null, this);
    this.physics.add.overlap(this.hero, this.coinso, collectCoin, null, this);
    
    
    blueCoinAnims(this)
    greenCoinAnims(this)
    orangeCoinAnims(this)
    
    
    heroAnims(this)
    

    this.keys = this.input.keyboard.addKeys('Z,X,A,S')
    this.cursors = this.input.keyboard.createCursorKeys();
  }



  update(x,dx) {
    
    
    
    adjustBodies(this)


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
