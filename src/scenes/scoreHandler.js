import "phaser";


export default class scoreHandler extends Phaser.Scene {
    constructor() {
        super('score-handler')
    }
    init(data) {
        this.scoreUI = data.gameData.score
    }
    create() {
        



      

        
        
        this.scoreText  = this.add.bitmapText(
            250,
            30,
            'font2',
            '',
            46
          )
          
          
         
          
    
        
        
        
          //console.log(gameState.score)
          
    }
    update() {
        
        this.scoreText.setText('Score: ' + this.scoreUI)
        
    }
}

    