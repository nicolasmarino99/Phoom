import 'phaser';

 
export default {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1500,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        },
        
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
   
    
};