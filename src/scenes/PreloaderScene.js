import 'phaser';
import {Align} from "../util/align";
import heroimg from '../assets/level1/mainCharacter/herojh.png';
import heroJSON from '../assets/level1/mainCharacter/herojh.json';
import mushroomimg from '../assets/level1/enemies/Mushroom/mushroom.png'
import mushroomJSON from '../assets/level1/enemies/Mushroom/mushroom.json';
import cbimg from '../assets/level1/coins/cb.png'
import cbJSON from '../assets/level1/coins/cb.json';
import cgimg from '../assets/level1/coins/cg.png'
import cgJSON from '../assets/level1/coins/cg.json';
import coimg from '../assets/level1/coins/co.png'
import coJSON from '../assets/level1/coins/co.json';
import goblinimg from '../assets/level1/enemies/Goblin/goblin.png'
import goblinJSON from '../assets/level1/enemies/Goblin/goblin.json';
import skeletonimg from '../assets/level1/enemies/Skeleton/skeleton.png'
import skeletonJSON from '../assets/level1/enemies/Skeleton/skeleton.json';
import bossimg from '../assets/level1/enemies/boss/boss.png'
import bossJSON from '../assets/level1/enemies/boss/boss.json';
import portalJSON from '../assets/portals/portal2/portal2.json'
import portalimg from '../assets/portals/portal2/portal2.png';




export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

 

  preload() {
    
    

    this.load.image('tiles', './src/assets/level1/map/tileset.png');
    this.load.tilemapCSV('level1CSV','./src/assets/level1/map/level1.csv')
    this.load.tilemapTiledJSON('level1JSON','./src/assets/level1/map/level1.json')
    this.load.atlas('hero',heroimg ,heroJSON)
    this.load.atlas('mushroom',mushroomimg ,mushroomJSON)
    this.load.atlas('cb',cbimg ,cbJSON)
    this.load.atlas('cg',cgimg ,cgJSON)
    this.load.atlas('co',coimg ,coJSON)
    this.load.atlas('goblin',goblinimg ,goblinJSON)
    this.load.atlas('skeleton',skeletonimg ,skeletonJSON)
    this.load.atlas('boss',bossimg ,bossJSON)
    this.load.image('bg_1', './src/assets/level1/map/sky.png');
    this.load.image('bg_2', './src/assets/level1/map/sea.png');
    this.load.image('bg_3', './src/assets/level1/map/clouds.png');
    this.load.image('bg_4', './src/assets/level1/map/far-grounds.png');
    this.load.audio('gameMusic', ['./src/assets/music/game/darkambient.OGG']);
    this.load.audio('coinMusic', ['./src/assets/music/game/pleasing-bell.wav']);
    this.load.audio('winningMusic', ['./src/assets/music/winning/winning.mp3']);
    this.load.audio('steps', ['./src/assets/music/game/steps/steps2.ogg']);
  
    this.load.html('nameform', './src/assets/text/nameform.html');
  
    this.load.image('pause1', './src/assets/ui/buttons/menu/pause1.png')
    this.load.image('pause2', './src/assets/ui/buttons/menu/pause2.png')

    this.load.atlas('portal', portalimg, portalJSON)
   

    this.load.plugin('rexclockplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexclockplugin.min.js', true);

    this.load.image('ManaPanel','./src/assets/ui/health/ManaPanel.png')
    this.load.image('orb','./src/assets/ui/health/orb.png')

    this.load.bitmapFont(
      'font2',
      './src/assets/fonts/menu2/font.png',
      './src/assets/fonts/menu2/font.fnt'
    )
    this.load.bitmapFont(
      'font3',
      './src/assets/fonts/menu3/font.png',
      './src/assets/fonts/menu3/font.fnt'
    )
    //load custom Fonts
    

    // create and aligned progress Bar and container. Render first Progress container
    let progressBar = this.add.graphics();
    let progressContainer = this.add.graphics();
    Align.center(progressBar)
    Align.center(progressContainer)
    progressContainer.fillStyle(0x222222, 0.8);
    progressContainer.fillRect(-160, -10, 320, 50);

    // Lets add and center loading, percentage and charged files texts
    let loadingText = this.make.text({
      x:0,
      y:0,
      text: 'Loading',
      style : {
        font: '30px monospace',
        fill: '#ffffff'
      }
    })
    Align.center(loadingText.setOrigin(0.5, 1.6))

    let percentText = this.make.text({
      x:0,
      y:0,
      text: '0%',
      style : {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })

    Align.center(percentText.setOrigin(0.4, -0.2))

    let fileText = this.make.text({
      x:0,
      y:0,
      text: '',
      style : {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })

    Align.center(fileText.setOrigin(0.5, -2.5))
   
   /* 

    PROGRESS: used for see each loaded file (in ths case it was uploaded 501 images. 
    1 from the other scene and 500 false image calls) CB VALUE: divides each load operation between 0 to 1
   
    FILEPROGRESS: returns from each load operation, its correspondly loaded file

    COMPLETE: When progress reach 1 it does whatever is needed

   */ 
    this.load.on('progress', value => {
      //console.log(value);
      progressBar.clear()
      progressBar.fillStyle(0xffffff,1)
      progressBar.fillRect(-150, 0, 300 * value, 30);
      percentText.setText(`${Math.floor(value*100)}%`)
    });
                
    this.load.on('fileprogress', file => {
      //console.log(file.src);
      fileText.setText(`Loading asserts:${file.src}`)
      
    });

    this.load.on('complete', () => {
        //console.log('complete');
        progressBar.destroy()
        progressContainer.destroy()
        loadingText.destroy()
        percentText.destroy()
        fileText.destroy()
    });


  }

  create () {  
    

    this.scene.start('Game')
  }

  
    
}