import 'phaser';
import {Align} from "../util/align";
import {AlignGrid} from "../util/alignGrid";



export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

 

  preload() {
    // This "for" emulates false charging, delaying the bar sending 500 load image queries
    for (var i = 0; i < 500; i++) {
        this.load.image('load'+i, 'null'+i);
    }

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
    let zenva = this.add.image(400,590,'zenva')
    Align.center(zenva)
    //this.scene.start('Menu')
  }

  createLoadingBar () {
    //Title
    this.title = new Text()

    //Progress Text

    this.txt_progress = new Text()

    //Progress Bar
  }
    
}